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
$output.java($entity.repository)##

#if ($entity.hasUniqueBigIntegerAttribute())
$output.require("java.math.BigInteger")##
#end
#if ($entity.hasUniqueDateAttribute() || $entity.root.hasDatePk())
$output.require("java.util.Date")##
#end
$output.require($entity.model)##
$output.require($entity.root.primaryKey)##
#foreach ($enumAttribute in $entity.uniqueEnumAttributes.list)
$output.require($enumAttribute)##
#end
$output.require("org.springframework.data.jpa.repository.*")##
public interface $output.currentClass extends JpaRepository<$entity.model.type, $entity.root.primaryKey.type> {

}