## How to make a Release

### GPG key

You need a GPG key.
On mac, you can use https://gpgtools.org/

### Sona type account

You need a Sona Type account
https://issues.sonatype.org/

### Access Github with SSH key

Set up your key
https://help.github.com/articles/generating-ssh-keys/

Once created, you may need to add it manually:
ssh-add ~/.ssh/your_ssh_key

### When cloning the first time

Make sure your project was cloned using:
git clone git@github.com:jaxio/celerio-angular-quickstart.git

### Releasing

In `celerio-template-pack.boot.vm.xml` freeze the version of our dependencies:

**Make sure all is committed**

Then execute:

    mvn release:prepare release:perform

### On OSS site

Go to https://oss.sonatype.org/ and select staging repositories

Find the jaxio's one (most likely at the end), select it and press the close button

Then press the release button.

Then check that it is present under:
https://oss.sonatype.org/content/repositories/public/com/jaxio/

That's all, your are done.



