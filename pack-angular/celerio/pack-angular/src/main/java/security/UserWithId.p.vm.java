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
$output.java($Security, "UserWithId")##

$output.require("java.util.Collection")##
$output.require("org.springframework.security.core.GrantedAuthority")##
$output.require("org.springframework.security.core.userdetails.User")##
## -- id type
#if ($project.isAccountEntityPresent())
$output.require($project.accountEntity.root.primaryKey)##
#set ($idType=$project.accountEntity.root.primaryKey.type)##
#else
$output.require("java.io.Serializable")##
#set ($idType="Serializable")##
#end

/**
 * Simple User that also keep track of the primary key.
 */
public class $output.currentClass extends User {
    private static final long serialVersionUID = 1L;
    private $idType id;

    public ${output.currentClass}(String username, String password, boolean enabled, boolean accountNonExpired,
            boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities, $idType id) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        this.id = id;
    }

    public $idType getId() {
        return id;
    }
}