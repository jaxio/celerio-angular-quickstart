$output.webapp("app/entities/${entity.model.var}/${entity.model.var}.ts")##
export interface $entity.model.type {
    $entity.primaryKey.attribute.var;
#foreach($attr in $entity.simpleAttributes.list)
    $attr.var;
#end
    idSet;
}
