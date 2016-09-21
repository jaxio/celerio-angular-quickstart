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
$output.java($Validation, "FixedLength")##

$output.requireStatic("java.lang.annotation.ElementType.ANNOTATION_TYPE")##
$output.requireStatic("java.lang.annotation.ElementType.FIELD")##
$output.requireStatic("java.lang.annotation.ElementType.METHOD")##
$output.requireStatic("java.lang.annotation.RetentionPolicy.RUNTIME")##
$output.require("java.lang.annotation.Documented")##
$output.require("java.lang.annotation.Retention")##
$output.require("java.lang.annotation.Target")##
$output.require("javax.validation.Constraint")##
$output.require("javax.validation.Payload")##
$output.require($ValidationImpl, "FixedLengthValidator")##

@Target( { METHOD, FIELD, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = FixedLengthValidator.class)
@Documented
public @interface $output.currentClass {
    int length() default 0;

    boolean nullable() default true;

    String message() default "{${Validation.packageName}.FixedLength.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
