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
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end

$output.require($entity.repository)##
$output.require("java.util.List")##
$output.require("java.net.URISyntaxException")##
$output.require("java.net.URI")##
$output.require("java.util.Optional")##

$output.require("javax.inject.Inject")##

$output.require("org.slf4j.LoggerFactory")##
$output.require("org.slf4j.Logger")##

$output.require("org.springframework.web.bind.annotation.*")##
$output.require("org.springframework.http.MediaType")##
$output.require("org.springframework.http.ResponseEntity")##
$output.require("org.springframework.web.bind.annotation.RequestBody")##
$output.require("org.springframework.data.domain.Pageable")##
$output.require("org.springframework.data.domain.Page")##
$output.require("org.springframework.http.HttpHeaders")##
$output.require("org.springframework.http.HttpStatus")##


@RestController
@RequestMapping("/api/${entity.model.vars}")
public class $output.currentClass{

    private final Logger log=LoggerFactory.getLogger(${output.currentClass}.class);

    @Inject
    private $entity.repository.type $entity.repository.var;

    /**
     * Create a new $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> create(@RequestBody $entity.model.type $entity.model.var) throws URISyntaxException {
        log.debug("Create $entity.model.varUp : {}",$entity.model.var);
        if (${entity.model.var}.getId() != null) {
            return ResponseEntity.badRequest().header("Failure","Cannot create ${entity.model.varUp} with existing ID").body(null);
        }
        $entity.model.type result = ${entity.repository.var}.save($entity.model.var);
        return ResponseEntity.created(new URI("/api/${entity.model.vars}/"+result.getId()))
            .body(result);
    }

    /**
     * Update $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> update(@RequestBody $entity.model.type $entity.model.var) throws URISyntaxException {
        log.debug("Update $entity.model.varUp : {}",$entity.model.var);
        if (${entity.model.var}.getId() == null) {
            return create(${entity.model.var});
        }
        $entity.model.type result = ${entity.repository.var}.save($entity.model.var);
        return ResponseEntity.ok()
            .body(result);
    }

    /**
     * Find all $entity.model.type.
     */
    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<$entity.model.type>> findAll(Pageable pageable) throws URISyntaxException {
        log.debug("Find all $entity.model.varsUp");
        Page<${entity.model.type}> page = ${entity.repository.var}.findAll(pageable);
        return new ResponseEntity<>(page.getContent(), new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Find by id $entity.model.type.
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<$entity.model.type> findById(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Find by id $entity.model.varsUp : {}", $entity.primaryKey.var);
        return Optional.ofNullable(${entity.repository.var}.findOne($entity.primaryKey.var))
            .map(${entity.model.var} -> new ResponseEntity<>(
                ${entity.model.var},
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Delete by id $entity.model.type.
     */
    @RequestMapping(value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable $entity.primaryKey.type $entity.primaryKey.var) throws URISyntaxException {
        log.debug("Delete by id $entity.model.varsUp : {}", $entity.primaryKey.var);
        ${entity.repository.var}.delete($entity.primaryKey.var);
        return ResponseEntity.ok().build();
    }
}