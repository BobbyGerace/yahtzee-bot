import Dependencies._

ThisBuild / scalaVersion     := "2.12.8"
ThisBuild / version          := "0.1.0-SNAPSHOT"

lazy val root = project.in(file(".")).
  aggregate(yahtzeeBot.js, yahtzeeBot.jvm).
  settings(
    publish := {},
    publishLocal := {},
  )

lazy val yahtzeeBot = crossProject(JSPlatform, JVMPlatform).in(file(".")).
  settings(
    name := "yahtzee-bot",
    version := "0.1-SNAPSHOT",
  ).
  jvmSettings(
    name := "yahtzee-bot",
    libraryDependencies += scalaTest % Test
  ).
  jsSettings(
    artifactPath in fastOptJS in Compile :=
      file("client/" + (moduleName in fastOptJS).value + ".js"),
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0",
  )
