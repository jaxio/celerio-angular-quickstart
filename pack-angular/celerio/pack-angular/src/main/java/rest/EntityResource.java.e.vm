## Copyright 2015 JAXIO http://www.jaxio.com
##
## Licensed under the Apache License, Version 2.0 (the "License");
## you may not use this file except in compliance with the License.
## You may obtain a copy of the License at
##
##    http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
##
$output.java($entity.rest)##

#if($entity.hasUniqueBigIntegerAttribute())
$output.require("java.math.BigInteger")##
#end
#if($entity.hasUniqueDateAttribute()||$entity.root.hasDatePk())
$output.require("java.util.Date")##
#end
$output.require($entity.dto)##
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end

$output.require("${Root.packageName}.rest.support.AutoCompleteQuery")##
$output.require("${Root.packageName}.dto.support.PageResponse")##
$output.require("${Root.packageName}.dto.support.PageRequestByExample")##

$output.require($entity.repository)##
$output.require($entity.dtoservice)##
$output.require("java.util.List")##
$output.require("java.net.URISyntaxException")##
$output.require("java.net.URI")##
$output.require("java.util.Optional")##

$output.require("javax.inject.Inject")##

$output.require("org.slf4j.LoggerFactory")##
$output.require("org.slf4j.Logger")##

$output.requireStatic("org.springframework.web.bind.annotation.RequestMethod.GET")##
$output.requireStatic("org.springframework.web.bind.annotation.RequestMethod.POST")##
$output.requireStatic("org.springframework.web.bind.annotation.RequestMethod.PUT")##
$output.requireStatic("org.springframework.web.bind.annotation.RequestMethod.DELETE")##
$output.require("org.springframework.web.bind.annotation.*")##
$output.requireStatic("org.springframework.http.MediaType.APPLICATION_JSON_VALUE")##
$output.require("org.springframework.http.ResponseEntity")##
$output.require("org.springframework.web.bind.annotation.RequestBody")##
$output.require("org.springframework.web.bind.annotation.RequestParam")##
$output.require("org.springframework.http.HttpHeaders")##
$output.require("org.springframework.http.HttpStatus")##

@RestController
@RequestMapping("/api/${entity.model.vars}")
public class $output.currentClass{

    private final Logger log = LoggerFactory.getLogger(${output.currentClass}.class);

    @Inject
    private $entity.repository.type $entity.repository.var;
    @Inject
    private $entity.dtoservice.type $entity.dtoservice.var;

    /**
     * Create a new ${entity.model.type}.
     */
    @RequestMapping(value = "/", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.dto.type> create(@RequestBody $entity.dto.type $entity.dto.var) throws URISyntaxException {
        log.debug("Create $entity.dto.type : {}", $entity.dto.var);
        if (${entity.dto.var}.isIdSet()) {
            return ResponseEntity.badRequest().header("Failure","Cannot create ${entity.model.type} with existing ID").body(null);
        }

        $entity.dto.type result = ${entity.dtoservice.var}.save($entity.dto.var);
        return ResponseEntity.
            created(new URI("/api/${entity.model.vars}/" + result.id)).
            body(result);
    }

    /**
    * Find by id ${entity.model.type}.
    */
    @RequestMapping(value = "/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.dto.type> findById(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Find by id $entity.model.type : {}", $entity.primaryKey.var);

        return Optional.ofNullable(${entity.dtoservice.var}.findOne($entity.primaryKey.var))
            .map(${entity.dto.var} -> new ResponseEntity<>(${entity.dto.var}, HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Update ${entity.model.type}.
     */
    @RequestMapping(value = "/", method = PUT, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.dto.type> update(@RequestBody $entity.dto.type $entity.dto.var) throws URISyntaxException {
        log.debug("Update $entity.dto.type : {}", $entity.dto.var);
        if (!${entity.dto.var}.isIdSet()) {
            return create($entity.dto.var);
        }
        $entity.dto.type result = ${entity.dtoservice.var}.save($entity.dto.var);
        return ResponseEntity.ok().body(result);
    }

    /**
     * Find a Page of $entity.model.type using query by example.
     */
    @RequestMapping(value = "/page", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse<$entity.dto.type>> findAll(@RequestBody PageRequestByExample<$entity.dto.type> prbe) throws URISyntaxException {
        PageResponse<$entity.dto.type> pageResponse = ${entity.dtoservice.var}.findAll(prbe);
        return new ResponseEntity<>(pageResponse, new HttpHeaders(), HttpStatus.OK);
    }

    /**
    * Auto complete support.
    */
    @RequestMapping(value = "/complete", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.dto.type>> complete(@RequestBody AutoCompleteQuery acq) throws URISyntaxException {
        List<$entity.dto.type> results = ${entity.dtoservice.var}.complete(acq.query, acq.maxResults);
        return new ResponseEntity<>(results, new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Delete by id ${}entity.model.type}.
     */
    @RequestMapping(value = "/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Delete by id $entity.model.type : {}", $entity.primaryKey.var);
        ${entity.repository.var}.delete($entity.primaryKey.var);
        return ResponseEntity.ok().build();
    }
}