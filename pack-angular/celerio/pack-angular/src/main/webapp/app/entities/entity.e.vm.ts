$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.ts")##
export interface $entity.model.type {
    $entity.primaryKey.attribute.var;
#foreach($attr in $entity.simpleAttributes.list)
    $attr.var;
#end
    idSet;
}

export class Prime${entity.model.type} implements ${entity.model.type} {

    constructor(public ${entity.primaryKey.attribute.var}? #foreach($attr in $entity.simpleAttributes.list), public ${attr.var}?#end, public idSet? ){}
}
