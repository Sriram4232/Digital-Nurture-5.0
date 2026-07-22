PS C:\Users\sriram\Desktop\CTS> git add Week-6/
warning: in the working copy of 'Week-6/GIT/4/GitConflict/hello.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Week-6/React/10/officespacerentalapp/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Week-6/React/11/eventexamplesapp/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Week-6/React/12/ticketbookingapp/package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'Week-6/React/13/bloggerapp/package.json', LF will be replaced by CRLF the next time Git touches it

PS C:\Users\sriram\Desktop\CTS> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Week-6/GIT/1/GitDemo/welcome.txt
        new file:   Week-6/GIT/1/output/output.png
        new file:   Week-6/GIT/2/GitIgnoreDemo/.gitignore
        new file:   Week-6/GIT/2/GitIgnoreDemo/demo.txt
        new file:   Week-6/GIT/2/output/output.png
        new file:   Week-6/GIT/3/GitBranchDemo/base.txt
        new file:   Week-6/GIT/3/GitBranchDemo/feature.txt
        new file:   Week-6/GIT/3/Output/Output.png
        new file:   Week-6/GIT/4/GitConflict/.gitignore
        new file:   Week-6/GIT/4/GitConflict/base.xml
        new file:   Week-6/GIT/4/GitConflict/hello.txt
        new file:   Week-6/GIT/4/output/output1.png
        new file:   Week-6/GIT/4/output/output2.png
        new file:   Week-6/GIT/5/GitRemoteDemo/README.md
        new file:   Week-6/React/10/Output/Output.png
        new file:   Week-6/React/10/officespacerentalapp/package-lock.json
        new file:   Week-6/React/10/officespacerentalapp/package.json
        new file:   Week-6/React/10/officespacerentalapp/public/index.html
        new file:   Week-6/React/10/officespacerentalapp/src/App.js
        new file:   Week-6/React/10/officespacerentalapp/src/index.css
        new file:   Week-6/React/10/officespacerentalapp/src/index.js
        ...

PS C:\Users\sriram\Desktop\CTS> git commit -m "Add Week-6 assignments"
[main abc1234] Add Week-6 assignments
 55 files changed, 85993 insertions(+)
 create mode 100644 Week-6/GIT/1/GitDemo/welcome.txt
 create mode 100644 Week-6/GIT/1/output/output.png
 create mode 100644 Week-6/GIT/2/GitIgnoreDemo/.gitignore
 create mode 100644 Week-6/GIT/2/GitIgnoreDemo/demo.txt
 create mode 100644 Week-6/GIT/2/output/output.png
 create mode 100644 Week-6/GIT/3/GitBranchDemo/base.txt
 create mode 100644 Week-6/GIT/3/GitBranchDemo/feature.txt
 ...

PS C:\Users\sriram\Desktop\CTS> git push origin main
Enumerating objects: 60, done.
Counting objects: 100% (60/60), done.
Delta compression using up to 8 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (55/55), 2.10 MiB | 2.50 MiB/s, done.
Total 55 (delta 5), reused 0 (delta 0), pack-reused 0
To https://github.com/Sriram4232/Digital-Nurture-5.0.git
   9ab123c..abc1234  main -> main

PS C:\Users\sriram\Desktop\CTS>
