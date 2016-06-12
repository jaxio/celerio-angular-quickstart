$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.ts")##
#macro(tstype $attr)
#if($attr.isString()) : string#elseif($attr.isNumeric()) : number#elseif($attr.isBoolean()) : boolean#elseif($attr.isDate()) : string#end
#end
## --------------- X to One
#foreach ($relation in $entity.xToOne.list)
#if(!$relation.to.type.equals($entity.model.type))
import {${relation.to.type}} from '../${relation.toEntity.model.var}/${relation.toEntity.model.var}';
#end
#end

export class $entity.model.type {
## --------------- Raw attributes (exception the one involved in XtoOneRelation)
#foreach ($attribute in $entity.nonCpkAttributes.list)
#if ($velocityCount == 1)
    // Raw attributes
#end
#if(!$attribute.isInFk() || $attribute.isSimplePk())
    ${attribute.var}#tstype($attribute);
#end
#end
## --------------- X to One
#foreach ($relation in $entity.xToOne.list)
#if ($velocityCount == 1)
    // x-to-one
#end
    $relation.to.var : $relation.to.type;
#end
}
