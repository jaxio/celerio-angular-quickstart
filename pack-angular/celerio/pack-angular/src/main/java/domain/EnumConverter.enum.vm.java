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
$output.generateIf($enum.config.isCustomType())##
$output.java($enum.model.packageName, "${enum.model.type}Converter")##

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class ${enum.model.type}Converter implements AttributeConverter<${enum.model.type}, String> {

    public String convertToDatabaseColumn(${enum.model.type} javaEnum) {
        if (javaEnum == null) {
            return null;
        }

        return javaEnum.getValue(); // dbValue...
    }

    public ${enum.model.type} convertToEntityAttribute(String dbValue) {
        if (dbValue == null || dbValue.isEmpty()) {
            return null;
        }

        return ${enum.model.type}.fromValue(dbValue);
    }
}