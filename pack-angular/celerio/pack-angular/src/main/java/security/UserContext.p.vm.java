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
$output.java($Security, "UserContext")##

$output.requireStatic("com.google.common.collect.Lists.newArrayList")##
$output.requireStatic("java.util.Collections.emptyList")##
$output.require("java.util.List")##
$output.require("java.util.Locale")##
$output.require("org.springframework.security.core.Authentication")##
$output.require("org.springframework.security.core.GrantedAuthority")##
$output.require("org.springframework.security.core.context.SecurityContextHolder")##
$output.require("org.springframework.security.core.userdetails.UserDetails")##

#if ($project.isAccountEntityPresent())
$output.require($project.accountEntity.root.primaryKey)##
#set ($idType=$project.accountEntity.root.primaryKey.type)##
#else
$output.require("java.io.Serializable")##
#set ($idType="Serializable")##
#end

/**
 * Get Spring security context to access user data security infos
 */
public final class $output.currentClass {
    public static final String ANONYMOUS_USER = "anonymousUser";

    private ${output.currentClass}(){
    }
    
    /**
     * Get the current username. Note that it may not correspond to a username that
     * currently exists in your account repository; it could be a spring security
     * 'anonymous user'.
     *
     * @see org.springframework.security.web.authentication.AnonymousAuthenticationFilter
     * @return the current user's username, or 'anonymousUser'.
     */
    public static String getUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            Object principal = auth.getPrincipal();

            if (principal instanceof UserDetails) {
                return ((UserDetails) principal).getUsername();
            }

            return principal.toString();
        }

        return ANONYMOUS_USER;
    }

    public static $idType getId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            Object principal = auth.getPrincipal();

            if (principal instanceof UserWithId) {
                return ((UserWithId) principal).getId();
            }
        }

        return null;
    }

    /**
     * Retrieve the current UserDetails bound to the current thread by Spring Security, if any.
     */
    public static UserDetails getUserDetails() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null && auth.getPrincipal() instanceof UserDetails) {
            return ((UserDetails) auth.getPrincipal());
        }

        return null;
    }

    /**
     * Return the current roles bound to the current thread by Spring Security.
     */
    public static List<String> getRoles() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth != null) {
            return toStringList(auth.getAuthorities());
        }

        return emptyList();
    }

    /**
     * Tell whether the passed role is set?
     *
     * @return true if the passed role is present, false otherwise.
     */
    public static boolean hasRole(String roleName) {
        for (String role : getRoles()) {
            if (role.equalsIgnoreCase(roleName)) {
                return true;
            }
        }

        return false;
    }

    public static List<String> toStringList(Iterable<? extends GrantedAuthority> grantedAuthorities) {
        List<String> result = newArrayList();

        for (GrantedAuthority grantedAuthority : grantedAuthorities) {
            result.add(grantedAuthority.getAuthority());
        }

        return result;
    }
}