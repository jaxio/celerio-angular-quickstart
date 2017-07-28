/*
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Template pack-angular:src/main/java/rest/EntityResource.java.e.vm
 */
package com.bpe.monitor.rest;

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

import com.bpe.monitor.domain.AlarmRule;
import com.bpe.monitor.dto.AlarmRuleDTO;
import com.bpe.monitor.dto.AlarmRuleDTOService;
import com.bpe.monitor.dto.support.PageRequestByExample;
import com.bpe.monitor.dto.support.PageResponse;
import com.bpe.monitor.repository.AlarmRuleRepository;
import com.bpe.monitor.rest.support.AutoCompleteQuery;

@RestController
@RequestMapping("/api/alarmRules")
public class AlarmRuleResource {

    private final Logger log = LoggerFactory.getLogger(AlarmRuleResource.class);

    @Inject
    private AlarmRuleRepository alarmRuleRepository;
    @Inject
    private AlarmRuleDTOService alarmRuleDTOService;

    /**
     * Create a new AlarmRule.
     */
    @RequestMapping(value = "/", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AlarmRuleDTO> create(@RequestBody AlarmRuleDTO alarmRuleDTO) throws URISyntaxException {

        log.debug("Create AlarmRuleDTO : {}", alarmRuleDTO);

        if (alarmRuleDTO.isIdSet()) {
            return ResponseEntity.badRequest().header("Failure", "Cannot create AlarmRule with existing ID").body(null);
        }

        AlarmRuleDTO result = alarmRuleDTOService.save(alarmRuleDTO);

        return ResponseEntity.created(new URI("/api/alarmRules/" + result.id)).body(result);
    }

    /**
    * Find by id AlarmRule.
    */
    @RequestMapping(value = "/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AlarmRuleDTO> findById(@PathVariable Long id) throws URISyntaxException {

        log.debug("Find by id AlarmRule : {}", id);

        return Optional.ofNullable(alarmRuleDTOService.findOne(id)).map(alarmRuleDTO -> new ResponseEntity<>(alarmRuleDTO, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Update AlarmRule.
     */
    @RequestMapping(value = "/", method = PUT, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AlarmRuleDTO> update(@RequestBody AlarmRuleDTO alarmRuleDTO) throws URISyntaxException {

        log.debug("Update AlarmRuleDTO : {}", alarmRuleDTO);

        if (!alarmRuleDTO.isIdSet()) {
            return create(alarmRuleDTO);
        }

        AlarmRuleDTO result = alarmRuleDTOService.save(alarmRuleDTO);

        return ResponseEntity.ok().body(result);
    }

    /**
     * Find a Page of AlarmRule using query by example.
     */
    @RequestMapping(value = "/page", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse<AlarmRuleDTO>> findAll(@RequestBody PageRequestByExample<AlarmRuleDTO> prbe) throws URISyntaxException {
        PageResponse<AlarmRuleDTO> pageResponse = alarmRuleDTOService.findAll(prbe);
        return new ResponseEntity<>(pageResponse, new HttpHeaders(), HttpStatus.OK);
    }

    /**
    * Auto complete support.
    */
    @RequestMapping(value = "/complete", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<AlarmRuleDTO>> complete(@RequestBody AutoCompleteQuery acq) throws URISyntaxException {

        List<AlarmRuleDTO> results = alarmRuleDTOService.complete(acq.query, acq.maxResults);

        return new ResponseEntity<>(results, new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Delete by id AlarmRule.
     */
    @RequestMapping(value = "/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable Long id) throws URISyntaxException {

        log.debug("Delete by id AlarmRule : {}", id);

        try {
            alarmRuleRepository.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception x) {
            // todo: dig exception, most likely org.hibernate.exception.ConstraintViolationException
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}