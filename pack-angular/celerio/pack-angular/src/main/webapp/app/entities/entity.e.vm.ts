$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.ts")##

## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
import {${manyToOne.to.type},Prime${manyToOne.to.type}} from '../${manyToOne.toEntity.model.var}/${manyToOne.toEntity.model.var}';
#end

export interface $entity.model.type {
## --------------- Raw attributes (exception the one involved in XtoOneRelation)
#foreach ($attribute in $entity.nonCpkAttributes.list)
#if ($velocityCount == 1)
    // Raw attributes
#end
#if(!$attribute.isInFk() || $attribute.isSimplePk())
    $attribute.var;
#end
#end
## --------------- Many to One
#foreach ($manyToOne in $entity.manyToOne.list)
#if ($velocityCount == 1)
    // Many to one
#end
    $manyToOne.to.var;
#end
    // extra, is it useful?
    idSet;
}

export class Prime${entity.model.type} implements ${entity.model.type} {
    constructor(
## --------------- Raw attributes (exception the one involved in XtoOneRelation)
#foreach ($attribute in $entity.nonCpkAttributes.list)
#if(!$attribute.isInFk() || $attribute.isSimplePk())#if ($velocityCount > 1), #{end}public ${attribute.var}?#{end}
#end
#foreach ($manyToOne in $entity.manyToOne.list), public ${manyToOne.to.var}?
#end
    // extra, is it useful?
    , public idSet?) {}
}
