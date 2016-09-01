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
$output.java($Audit, "AuditContextHolder")##

$output.requireStatic("org.apache.commons.lang.StringUtils.trimToNull")##
$output.require("javax.persistence.PrePersist")##
$output.require("javax.persistence.PreUpdate")##
$output.require($Security, "UserContext")##

/**
 * Enable/disable {@link PreUpdate} and {@link PrePersist} actions and/or force the username to be used.
 * Please note that you are in charge of reseting the context properties if you use them directly.
 */
public final class $output.currentClass {
    private static final ThreadLocal<Boolean> audit = new ThreadLocal<Boolean>();
    private static final ThreadLocal<String> username = new ThreadLocal<String>();

    private ${output.currentClass}(){
    }
    
    public static void setAudit(boolean auditing) {
        audit.set(auditing);
    }

    public static void setUsername(String user) {
        username.set(trimToNull(user));
    }

    /**
     * Whether audit is enable ? Defaults to true.
     */
    public static boolean audit() {
        return audit.get() == null ? true : audit.get();
    }

    /**
     * The username bound to this thread or if it is null the username returned by the {@link UserContext};
     */
    public static String username() {
        return username.get() == null ? UserContext.getUsername() : username.get();
    }

    public static void clear() {
        audit.remove();
        username.remove();
    }
}