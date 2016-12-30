/*
 * Source code generated by Celerio, a Jaxio product.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Follow us on twitter: @jaxiosoft
 * Need commercial support ? Contact us: info@jaxio.com
 * Template pack-angular:src/main/java/rest/EntityResource.java.e.vm
 */
package com.mycompany.myapp.rest;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import com.mycompany.myapp.domain.Project;
import com.mycompany.myapp.dto.ProjectDTO;
import com.mycompany.myapp.dto.ProjectDTOService;
import com.mycompany.myapp.dto.support.PageRequestByExample;
import com.mycompany.myapp.dto.support.PageResponse;
import com.mycompany.myapp.repository.ProjectRepository;
import com.mycompany.myapp.rest.support.AutoCompleteQuery;

@RestController
@RequestMapping("/api/projects")
public class ProjectResource {

    private final Logger log = LoggerFactory.getLogger(ProjectResource.class);

    @Inject
    private ProjectRepository projectRepository;
    @Inject
    private ProjectDTOService projectDTOService;

    /**
     * Create a new Project.
     */
    @RequestMapping(value = "/", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProjectDTO> create(@RequestBody ProjectDTO projectDTO) throws URISyntaxException {

        log.debug("Create ProjectDTO : {}", projectDTO);

        if (projectDTO.isIdSet()) {
            return ResponseEntity.badRequest().header("Failure", "Cannot create Project with existing ID").body(null);
        }

        ProjectDTO result = projectDTOService.save(projectDTO);

        return ResponseEntity.created(new URI("/api/projects/" + result.id)).body(result);
    }

    /**
    * Find by id Project.
    */
    @RequestMapping(value = "/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProjectDTO> findById(@PathVariable Integer id) throws URISyntaxException {

        log.debug("Find by id Project : {}", id);

        return Optional.ofNullable(projectDTOService.findOne(id)).map(projectDTO -> new ResponseEntity<>(projectDTO, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Update Project.
     */
    @RequestMapping(value = "/", method = PUT, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProjectDTO> update(@RequestBody ProjectDTO projectDTO) throws URISyntaxException {

        log.debug("Update ProjectDTO : {}", projectDTO);

        if (!projectDTO.isIdSet()) {
            return create(projectDTO);
        }

        ProjectDTO result = projectDTOService.save(projectDTO);

        return ResponseEntity.ok().body(result);
    }

    /**
     * Find a Page of Project using query by example.
     */
    @RequestMapping(value = "/page", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse<ProjectDTO>> findAll(@RequestBody PageRequestByExample<ProjectDTO> prbe) throws URISyntaxException {
        PageResponse<ProjectDTO> pageResponse = projectDTOService.findAll(prbe);
        return new ResponseEntity<>(pageResponse, new HttpHeaders(), HttpStatus.OK);
    }

    /**
    * Auto complete support.
    */
    @RequestMapping(value = "/complete", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<ProjectDTO>> complete(@RequestBody AutoCompleteQuery acq) throws URISyntaxException {

        List<ProjectDTO> results = projectDTOService.complete(acq.query, acq.maxResults);

        return new ResponseEntity<>(results, new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Delete by id Project.
     */
    @RequestMapping(value = "/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws URISyntaxException {

        log.debug("Delete by id Project : {}", id);

        try {
            projectRepository.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception x) {
            // todo: dig exception, most likely org.hibernate.exception.ConstraintViolationException
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}