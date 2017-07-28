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

import com.bpe.monitor.domain.Device;
import com.bpe.monitor.dto.DeviceDTO;
import com.bpe.monitor.dto.DeviceDTOService;
import com.bpe.monitor.dto.support.PageRequestByExample;
import com.bpe.monitor.dto.support.PageResponse;
import com.bpe.monitor.repository.DeviceRepository;
import com.bpe.monitor.rest.support.AutoCompleteQuery;

@RestController
@RequestMapping("/api/devices")
public class DeviceResource {

    private final Logger log = LoggerFactory.getLogger(DeviceResource.class);

    @Inject
    private DeviceRepository deviceRepository;
    @Inject
    private DeviceDTOService deviceDTOService;

    /**
     * Create a new Device.
     */
    @RequestMapping(value = "/", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<DeviceDTO> create(@RequestBody DeviceDTO deviceDTO) throws URISyntaxException {

        log.debug("Create DeviceDTO : {}", deviceDTO);

        if (deviceDTO.isIdSet()) {
            return ResponseEntity.badRequest().header("Failure", "Cannot create Device with existing ID").body(null);
        }

        DeviceDTO result = deviceDTOService.save(deviceDTO);

        return ResponseEntity.created(new URI("/api/devices/" + result.id)).body(result);
    }

    /**
    * Find by id Device.
    */
    @RequestMapping(value = "/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<DeviceDTO> findById(@PathVariable Long id) throws URISyntaxException {

        log.debug("Find by id Device : {}", id);

        return Optional.ofNullable(deviceDTOService.findOne(id)).map(deviceDTO -> new ResponseEntity<>(deviceDTO, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Update Device.
     */
    @RequestMapping(value = "/", method = PUT, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<DeviceDTO> update(@RequestBody DeviceDTO deviceDTO) throws URISyntaxException {

        log.debug("Update DeviceDTO : {}", deviceDTO);

        if (!deviceDTO.isIdSet()) {
            return create(deviceDTO);
        }

        DeviceDTO result = deviceDTOService.save(deviceDTO);

        return ResponseEntity.ok().body(result);
    }

    /**
     * Find a Page of Device using query by example.
     */
    @RequestMapping(value = "/page", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse<DeviceDTO>> findAll(@RequestBody PageRequestByExample<DeviceDTO> prbe) throws URISyntaxException {
        PageResponse<DeviceDTO> pageResponse = deviceDTOService.findAll(prbe);
        return new ResponseEntity<>(pageResponse, new HttpHeaders(), HttpStatus.OK);
    }

    /**
    * Auto complete support.
    */
    @RequestMapping(value = "/complete", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<DeviceDTO>> complete(@RequestBody AutoCompleteQuery acq) throws URISyntaxException {

        List<DeviceDTO> results = deviceDTOService.complete(acq.query, acq.maxResults);

        return new ResponseEntity<>(results, new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Delete by id Device.
     */
    @RequestMapping(value = "/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable Long id) throws URISyntaxException {

        log.debug("Delete by id Device : {}", id);

        try {
            deviceRepository.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception x) {
            // todo: dig exception, most likely org.hibernate.exception.ConstraintViolationException
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}