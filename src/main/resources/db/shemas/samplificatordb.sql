-- To remove in prod --
DROP DATABASE IF EXISTS samplificatordb;
CREATE DATABASE samplificatordb;
CREATE USER simplifyuser;
CREATE ROLE simplifyuser SUPERUSER;
GRANT ROOT TO simplifyuser;
ALTER ROLE simplifyuser WITH LOGIN;
GRANT ALL PRIVILEGES ON DATABASE "samplificatordb" TO simplifyuser;

ALTER USER simplifyuser WITH PASSWORD 'samplifypass';
