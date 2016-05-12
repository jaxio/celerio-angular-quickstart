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
$output.java($primaryKey.packageName, "${primaryKey.type}_")##

$output.require("javax.persistence.metamodel.StaticMetamodel")##
$output.require("javax.persistence.metamodel.SingularAttribute")##

@StaticMetamodel(${primaryKey.type}.class)
public abstract class $output.currentClass {
#foreach ($attribute in $primaryKey.attributes)
#if ($velocityCount == 1)
    // pk attributes
#end
$output.require($attribute)##
    public static volatile SingularAttribute<${primaryKey.type}, $attribute.type> $attribute.var;
#end
}
