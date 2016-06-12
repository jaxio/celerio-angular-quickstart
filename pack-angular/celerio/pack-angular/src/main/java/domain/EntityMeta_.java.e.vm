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
$output.java($entity.model, "${entity.model.type}_")##
##------------------------------------------------------------------------
## IMPORTANT: This template must be executed after the Entity.e.vm.java one
## because the Entity.e.vm.java also create the metamodel take over if needed.
## By executing this template after Entity.e.vm.java, celerio has the opportunity to
## create the XxxBase_ metamodel instead of the Xxx_ metamodel
##------------------------------------------------------------------------

$output.require("javax.persistence.metamodel.SingularAttribute")##
$output.require("javax.persistence.metamodel.StaticMetamodel")##
$output.require($entity.model)##

@StaticMetamodel(${output.currentClassWithout_}.class)
#if($entity.isRoot())
public abstract class $output.currentClass {
#else
$output.require("${entity.parent.model.fullType}_")##
public abstract class $output.currentClass extends ${entity.parent.model.type}_ {
#end
#if ($entity.isRoot() && $entity.primaryKey.isComposite())
    // Composite primary key
    public static volatile SingularAttribute<$entity.model.type, $entity.primaryKey.type> $entity.primaryKey.var;
#end
## --------------- Raw attributes (exception the one involved in XtoOneRelation)
#foreach ($attribute in $entity.nonCpkAttributes.list)
#if ($velocityCount == 1)

    // Raw attributes
#end
#if(!$attribute.isInFk() || $attribute.isSimplePk())
$output.require($attribute)##
    public static volatile SingularAttribute<$entity.model.type, $attribute.type> $attribute.var;
#end
#end
##----------------------
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)

    // Many to one
#end
$output.require($manyToOne.to)##    
    public static volatile SingularAttribute<$entity.model.type, $manyToOne.to.type> $manyToOne.to.var;
#end
#foreach ($oneToOne in $entity.oneToOne.list)
#if ($velocityCount == 1)

    // One to one
#end
$output.require($oneToOne.to)##    
    public static volatile SingularAttribute<$entity.model.type, $oneToOne.to.type> $oneToOne.to.var;
#end
#foreach ($oneToVirtualOne in $entity.oneToVirtualOne.list)
#if ($velocityCount == 1)

    // One to virtual one
$output.require("$entity.collectionType.metaModelFullType")##    
#end
$output.require($oneToVirtualOne.to)##    
    public static volatile ${entity.collectionType.metaModelType}<$entity.model.type, $oneToVirtualOne.to.type> $oneToVirtualOne.to.vars;
#end
#foreach ($oneToMany in $entity.oneToMany.list)
#if ($velocityCount == 1)

    // One to many
$output.require("$entity.collectionType.metaModelFullType")##
#end
$output.require($oneToMany.to)##
    public static volatile ${entity.collectionType.metaModelType}<$entity.model.type, $oneToMany.to.type> $oneToMany.to.vars;
#end
#foreach ($manyToMany in $entity.manyToMany.list)
#if ($velocityCount == 1)

    // Many to many
$output.require("$entity.collectionType.metaModelFullType")##
#end
$output.require($manyToMany.to)##
    public static volatile ${entity.collectionType.metaModelType}<$entity.model.type, $manyToMany.to.type> $manyToMany.to.vars;
#end
}