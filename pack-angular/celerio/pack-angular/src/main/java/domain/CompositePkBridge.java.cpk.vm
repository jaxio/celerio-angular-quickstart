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
$output.generateIf($project.hibernateSearchUsed)##
$output.java($primaryKey.packageName, "${primaryKey.type}Bridge")##

$output.require("org.apache.lucene.document.Document")##
$output.require("org.hibernate.search.bridge.LuceneOptions")##
$output.require("org.hibernate.search.bridge.TwoWayFieldBridge")##

public class $output.currentClass implements TwoWayFieldBridge {

    @Override
    public Object get(String name, Document document) {
        $primaryKey.type $primaryKey.var = new ${primaryKey.type}();
#foreach ($attribute in $primaryKey.attributes)
#if($attribute.isNumeric())
#if($attribute.isInteger() ||$attribute.isLong() || $attribute.isDouble() || $attribute.isFloat())
		${primaryKey.var}.${attribute.setter}(${attribute.type}.valueOf(document.getFieldable(name + ".$attribute.var").stringValue()));
#else
		${primaryKey.var}.${attribute.setter}(new ${attribute.type}(document.getFieldable(name + ".$attribute.var").stringValue()));
#end
#else
        ${primaryKey.var}.${attribute.setter}(document.getFieldable(name + ".$attribute.var").stringValue());
#end
#end
        return $primaryKey.var;
    }

    @Override
    public String objectToString(Object object) {
        $primaryKey.type $primaryKey.var = ($primaryKey.type) object;
        return ${primaryKey.var}.toString().replace(':', ' '); // TODO: is space better?
    }

    @Override
    public void set(String name, Object value, Document document, LuceneOptions luceneOptions) {
        $primaryKey.type $primaryKey.var = ($primaryKey.type) value;
#foreach ($attribute in $primaryKey.attributes)
#if($attribute.isNumeric())
        luceneOptions.addNumericFieldToDocument(name + ".$attribute.var", ${primaryKey.var}.${attribute.getter}(), document);
#else
    luceneOptions.addFieldToDocument(name + ".$attribute.var", ${primaryKey.var}.${attribute.getter}(), document);
#end
#end
    }
}