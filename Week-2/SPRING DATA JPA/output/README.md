```text
"C:\Program Files\Java\jdk-17\bin\java.exe" -XX:TieredStopAtLevel=1 -Dspring.output.ansi.enabled=always ...

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::               (v3.5.16)

2026-07-01T23:26:00.282+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Starting OrmLearnApplication using Java 17.0.10 with PID 3308

2026-07-01T23:26:00.288+05:30 DEBUG 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Running with Spring Boot v3.5.16, Spring v6.2.19

2026-07-01T23:26:00.290+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : No active profile set, falling back to 1 default profile: "default"

2026-07-01T23:26:00.514+05:30  INFO 3308 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable

2026-07-01T23:26:00.515+05:30  INFO 3308 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'

2026-07-01T23:26:01.977+05:30  INFO 3308 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.

2026-07-01T23:26:02.044+05:30  INFO 3308 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 55 ms. Found 1 JPA repository interface.

2026-07-01T23:26:02.735+05:30  INFO 3308 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)

2026-07-01T23:26:02.752+05:30  INFO 3308 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]

2026-07-01T23:26:02.753+05:30  INFO 3308 --- [  restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.55]

2026-07-01T23:26:02.827+05:30  INFO 3308 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext

2026-07-01T23:26:02.828+05:30  INFO 3308 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2311 ms

2026-07-01T23:26:03.050+05:30  INFO 3308 --- [  restartedMain] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]

2026-07-01T23:26:03.135+05:30  INFO 3308 --- [  restartedMain] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.6.53.Final

2026-07-01T23:26:03.175+05:30  INFO 3308 --- [  restartedMain] o.h.c.internal.RegionFactoryInitiator    : HHH000026: Second-level cache disabled

2026-07-01T23:26:03.523+05:30  INFO 3308 --- [  restartedMain] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer

2026-07-01T23:26:03.561+05:30  INFO 3308 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...

2026-07-01T23:26:05.303+05:30  INFO 3308 --- [  restartedMain] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@1b6b8a9b

2026-07-01T23:26:05.306+05:30  INFO 3308 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.

2026-07-01T23:26:05.879+05:30  INFO 3308 --- [  restartedMain] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
    Database JDBC URL [Connecting through datasource 'HikariDataSource (HikariPool-1)']
    Database driver: undefined/unknown
    Database version: 8.0.46
    Autocommit mode: undefined/unknown
    Isolation level: undefined/unknown
    Minimum pool size: undefined/unknown
    Maximum pool size: undefined/unknown

2026-07-01T23:26:06.878+05:30  INFO 3308 --- [  restartedMain] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)

2026-07-01T23:26:07.232+05:30  INFO 3308 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'

2026-07-01T23:26:07.780+05:30  WARN 3308 --- [  restartedMain] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning

2026-07-01T23:26:08.388+05:30  INFO 3308 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729

2026-07-01T23:26:08.430+05:30  INFO 3308 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/'

2026-07-01T23:26:08.441+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Started OrmLearnApplication in 8.987 seconds (process running for 9.835)

2026-07-01T23:26:08.444+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Inside Main

2026-07-01T23:26:08.444+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Start

2026-07-01T23:26:08.629+05:30 DEBUG 3308 --- [  restartedMain] org.hibernate.SQL:

    select
        c1_0.co_code,
        c1_0.co_name
    from
        country c1_0

Hibernate:

    select
        c1_0.co_code,
        c1_0.co_name
    from
        country c1_0

2026-07-01T23:26:08.712+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : Countries: [Country{code='IN', name='India'}, Country{code='US', name='United States'}]

2026-07-01T23:26:08.714+05:30  INFO 3308 --- [  restartedMain] c.c.orm_learn.OrmLearnApplication        : End
```