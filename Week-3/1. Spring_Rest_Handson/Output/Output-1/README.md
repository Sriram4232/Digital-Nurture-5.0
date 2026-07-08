# Console Output

```text
"C:\Program Files\Java\jdk-17\bin\java.exe" -XX:TieredStopAtLevel=1 -Dspring.output.ansi.enabled=always "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA 2025.3.1\lib\idea_rt.jar=56039" -Dfile.encoding=UTF-8 -classpath C:\Users\sriram\Desktop\CTS\Week-2\Differences\spring-data-jpa-demo\target\classes;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-data-jpa\3.5.16\spring-boot-starter-data-jpa-3.5.16.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter\3.5.16\spring-boot-starter-3.5.16.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-logging\3.5.16\spring-boot-starter-logging-3.5.16.jar;C:\Users\sriram\.m2\repository\ch\qos\logback\logback-classic\1.5.34\logback-classic-1.5.34.jar;C:\Users\sriram\.m2\repository\ch\qos\logback\logback-core\1.5.34\logback-core-1.5.34.jar;C:\Users\sriram\.m2\repository\org\apache\logging\log4j\log4j-to-slf4j\2.24.3\log4j-to-slf4j-2.24.3.jar;C:\Users\sriram\.m2\repository\org\apache\logging\log4j\log4j-api\2.24.3\log4j-api-2.24.3.jar;C:\Users\sriram\.m2\repository\org\slf4j\jul-to-slf4j\2.0.18\jul-to-slf4j-2.0.18.jar;C:\Users\sriram\.m2\repository\jakarta\annotation\jakarta.annotation-api\2.1.1\jakarta.annotation-api-2.1.1.jar;C:\Users\sriram\.m2\repository\org\yaml\snakeyaml\2.4\snakeyaml-2.4.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-jdbc\3.5.16\spring-boot-starter-jdbc-3.5.16.jar;C:\Users\sriram\.m2\repository\com\zaxxer\HikariCP\6.3.3\HikariCP-6.3.3.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-jdbc\6.2.19\spring-jdbc-6.2.19.jar;C:\Users\sriram\.m2\repository\org\hibernate\orm\hibernate-core\6.6.53.Final\hibernate-core-6.6.53.Final.jar;C:\Users\sriram\.m2\repository\jakarta\persistence\jakarta.persistence-api\3.1.0\jakarta.persistence-api-3.1.0.jar;C:\Users\sriram\.m2\repository\jakarta\transaction\jakarta.transaction-api\2.0.1\jakarta.transaction-api-2.0.1.jar;C:\Users\sriram\.m2\repository\org\jboss\logging\jboss-logging\3.6.3.Final\jboss-logging-3.6.3.Final.jar;C:\Users\sriram\.m2\repository\org\hibernate\common\hibernate-commons-annotations\7.0.3.Final\hibernate-commons-annotations-7.0.3.Final.jar;C:\Users\sriram\.m2\repository\io\smallrye\jandex\3.2.0\jandex-3.2.0.jar;C:\Users\sriram\.m2\repository\com\fasterxml\classmate\1.7.3\classmate-1.7.3.jar;C:\Users\sriram\.m2\repository\net\bytebuddy\byte-buddy\1.17.8\byte-buddy-1.17.8.jar;C:\Users\sriram\.m2\repository\org\glassfish\jaxb\jaxb-runtime\4.0.9\jaxb-runtime-4.0.9.jar;C:\Users\sriram\.m2\repository\org\glassfish\jaxb\jaxb-core\4.0.9\jaxb-core-4.0.9.jar;C:\Users\sriram\.m2\repository\org\eclipse\angus\angus-activation\2.0.3\angus-activation-2.0.3.jar;C:\Users\sriram\.m2\repository\org\glassfish\jaxb\txw2\4.0.9\txw2-4.0.9.jar;C:\Users\sriram\.m2\repository\com\sun\istack\istack-commons-runtime\4.1.2\istack-commons-runtime-4.1.2.jar;C:\Users\sriram\.m2\repository\jakarta\inject\jakarta.inject-api\2.0.1\jakarta.inject-api-2.0.1.jar;C:\Users\sriram\.m2\repository\org\antlr\antlr4-runtime\4.13.2\antlr4-runtime-4.13.2.jar;C:\Users\sriram\.m2\repository\org\springframework\data\spring-data-jpa\3.5.13\spring-data-jpa-3.5.13.jar;C:\Users\sriram\.m2\repository\org\springframework\data\spring-data-commons\3.5.13\spring-data-commons-3.5.13.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-orm\6.2.19\spring-orm-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-context\6.2.19\spring-context-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-aop\6.2.19\spring-aop-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-tx\6.2.19\spring-tx-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-beans\6.2.19\spring-beans-6.2.19.jar;C:\Users\sriram\.m2\repository\org\slf4j\slf4j-api\2.0.18\slf4j-api-2.0.18.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-aspects\6.2.19\spring-aspects-6.2.19.jar;C:\Users\sriram\.m2\repository\org\aspectj\aspectjweaver\1.9.25.1\aspectjweaver-1.9.25.1.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-web\3.5.16\spring-boot-starter-web-3.5.16.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-json\3.5.16\spring-boot-starter-json-3.5.16.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\core\jackson-databind\2.21.4\jackson-databind-2.21.4.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\core\jackson-annotations\2.21\jackson-annotations-2.21.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\core\jackson-core\2.21.4\jackson-core-2.21.4.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jdk8\2.21.4\jackson-datatype-jdk8-2.21.4.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jsr310\2.21.4\jackson-datatype-jsr310-2.21.4.jar;C:\Users\sriram\.m2\repository\com\fasterxml\jackson\module\jackson-module-parameter-names\2.21.4\jackson-module-parameter-names-2.21.4.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-starter-tomcat\3.5.16\spring-boot-starter-tomcat-3.5.16.jar;C:\Users\sriram\.m2\repository\org\apache\tomcat\embed\tomcat-embed-core\10.1.55\tomcat-embed-core-10.1.55.jar;C:\Users\sriram\.m2\repository\org\apache\tomcat\embed\tomcat-embed-el\10.1.55\tomcat-embed-el-10.1.55.jar;C:\Users\sriram\.m2\repository\org\apache\tomcat\embed\tomcat-embed-websocket\10.1.55\tomcat-embed-websocket-10.1.55.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-web\6.2.19\spring-web-6.2.19.jar;C:\Users\sriram\.m2\repository\io\micrometer\micrometer-observation\1.15.12\micrometer-observation-1.15.12.jar;C:\Users\sriram\.m2\repository\io\micrometer\micrometer-commons\1.15.12\micrometer-commons-1.15.12.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-webmvc\6.2.19\spring-webmvc-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-expression\6.2.19\spring-expression-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-devtools\3.5.16\spring-boot-devtools-3.5.16.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot\3.5.16\spring-boot-3.5.16.jar;C:\Users\sriram\.m2\repository\org\springframework\boot\spring-boot-autoconfigure\3.5.16\spring-boot-autoconfigure-3.5.16.jar;C:\Users\sriram\.m2\repository\com\mysql\mysql-connector-j\9.7.0\mysql-connector-j-9.7.0.jar;C:\Users\sriram\.m2\repository\jakarta\xml\bind\jakarta.xml.bind-api\4.0.5\jakarta.xml.bind-api-4.0.5.jar;C:\Users\sriram\.m2\repository\jakarta\activation\jakarta.activation-api\2.1.4\jakarta.activation-api-2.1.4.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-core\6.2.19\spring-core-6.2.19.jar;C:\Users\sriram\.m2\repository\org\springframework\spring-jcl\6.2.19\spring-jcl-6.2.19.jar com.cognizant.spring_data_jpa_demo.SpringDataJpaDemoApplication

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::               (v3.5.16)

2026-07-08T21:13:34.316+05:30  INFO 18440 --- [  restartedMain] c.c.s.SpringDataJpaDemoApplication       : Starting SpringDataJpaDemoApplication using Java 17.0.10 with PID 18440 (C:\Users\sriram\Desktop\CTS\Week-2\Differences\spring-data-jpa-demo\target\classes started by sriram in C:\Users\sriram\Desktop\CTS\Week-2\Differences\spring-data-jpa-demo)
2026-07-08T21:13:34.321+05:30  INFO 18440 --- [  restartedMain] c.c.s.SpringDataJpaDemoApplication       : No active profile set, falling back to 1 default profile: "default"
2026-07-08T21:13:34.458+05:30  INFO 18440 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-07-08T21:13:34.458+05:30  INFO 18440 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-07-08T21:13:35.642+05:30  INFO 18440 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2026-07-08T21:13:35.746+05:30  INFO 18440 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 86 ms. Found 1 JPA repository interface.
2026-07-08T21:13:36.796+05:30  INFO 18440 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-07-08T21:13:36.814+05:30  INFO 18440 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-07-08T21:13:36.815+05:30  INFO 18440 --- [  restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.55]
2026-07-08T21:13:36.888+05:30  INFO 18440 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-07-08T21:13:36.889+05:30  INFO 18440 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2429 ms
2026-07-08T21:13:37.112+05:30  INFO 18440 --- [  restartedMain] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2026-07-08T21:13:37.180+05:30  INFO 18440 --- [  restartedMain] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.6.53.Final
2026-07-08T21:13:37.220+05:30  INFO 18440 --- [  restartedMain] o.h.c.internal.RegionFactoryInitiator    : HHH000026: Second-level cache disabled
2026-07-08T21:13:37.565+05:30  INFO 18440 --- [  restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
2026-07-08T21:13:37.600+05:30  INFO 18440 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2026-07-08T21:13:38.212+05:30  INFO 18440 --- [  restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@33ec4cf0
2026-07-08T21:13:38.214+05:30  INFO 18440 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2026-07-08T21:13:38.364+05:30  INFO 18440 --- [  restartedMain] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
	Database JDBC URL [Connecting through datasource 'HikariDataSource (HikariPool-1)']
	Database driver: undefined/unknown
	Database version: 8.0.46
	Autocommit mode: undefined/unknown
	Isolation level: undefined/unknown
	Minimum pool size: undefined/unknown
	Maximum pool size: undefined/unknown
2026-07-08T21:13:39.442+05:30  INFO 18440 --- [  restartedMain] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2026-07-08T21:13:39.778+05:30  INFO 18440 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2026-07-08T21:13:40.088+05:30  WARN 18440 --- [  restartedMain] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2026-07-08T21:13:40.446+05:30  INFO 18440 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-07-08T21:13:40.489+05:30  INFO 18440 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/'
2026-07-08T21:13:40.500+05:30  INFO 18440 --- [  restartedMain] c.c.s.SpringDataJpaDemoApplication       : Started SpringDataJpaDemoApplication in 7.053 seconds (process running for 8.615)
2026-07-08T21:13:40.571+05:30 DEBUG 18440 --- [  restartedMain] org.hibernate.SQL                        : 
    insert 
    into
        employee
        (department, name, salary) 
    values
        (?, ?, ?)
Hibernate: 
    insert 
    into
        employee
        (department, name, salary) 
    values
        (?, ?, ?)
Employee inserted successfully.
```
