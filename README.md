# Web Stream Programming
This is a code for blog: [Web Stream Programming](http://xuefengwu.github.io/blog/2014/01/22/web-stream-programming/)

## Setup
1. Type "./sbt" in the web-stream-programming directory. This will download the internet, and run sbt.
2. Type "run".  This will compile everything and launch the server on port 9000.

## IDE
* I've used the Eclipse plugin and it's very good these days. "sbt eclipse" will create your Eclipse project; you can them import it with File > Import.  However, I recommend downloading the [Scala Eclipse IDE](http://scala-ide.org/) separately, rather than adding the Scala plugin to your existing Eclipse.  This should eliminate version incompatibilities and inter-plugin warfare. 
* Intellij is supposed to be good too; you can generate Intellij files by typing "sbt idea".
* You can find Scala Vim colors [here](https://github.com/scala/scala-dist/tree/master/tool-support/src/vim), 
* For Emacs there is the apparently excellent [ENSIME](https://github.com/aemoncannon/ensime).
