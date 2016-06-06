$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.ts")##
#macro(tstype $attr)
#if($attr.isString()) : string#elseif($attr.isNumeric()) : number#elseif($attr.isBoolean()) : boolean#elseif($attr.isDate()) : string#end
#end
## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if(!$manyToOne.to.type.equals($entity.model.type))
import {${manyToOne.to.type}} from '../${manyToOne.toEntity.model.var}/${manyToOne.toEntity.model.var}';
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
## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one
#end
    $manyToOne.to.var : $manyToOne.to.type;
#end
}
