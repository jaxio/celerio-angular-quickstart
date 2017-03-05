---
-- Example Schema using H2 database
--

DROP ALL OBJECTS;

CREATE TABLE USER (
    id                       int not null IDENTITY,
    login                    varchar(100) not null,
    password                 varchar(100) not null,
    email                    varchar(100),
    is_enabled               bool not null default true,
    civility                 char(2) default 'MR',
    country_code             varchar(6) default '+33',
    first_name               varchar(100),
    last_name                varchar(100),

-- audit (detected by celerio by convention)
    creation_date            timestamp,
    creation_author          varchar(200),
    last_modification_date   timestamp,
    last_modification_author varchar(200),

-- optimistic lock (detected by celerio by convention)
    version                  int default 0,

    constraint user_unique_1 unique (login),
    primary key (id)
);

COMMENT ON TABLE USER IS 'The User is a human that can connect to this web application';
COMMENT ON COLUMN USER.LOGIN IS 'The login used to login';


CREATE TABLE PASSPORT (
    id                       int not null IDENTITY,
    passport_number          varchar(100) not null,
    expiration_date          date,
    holder_id                int not null,
    constraint holder_fk foreign key (holder_id) references USER,
    constraint holder_fk_unique unique (holder_id),
    primary key (id)
);


CREATE TABLE ROLE (
    id              int not null IDENTITY,
    role_name       varchar(100) not null,
    constraint role_unique_1 unique (role_name),
    primary key (id)
);

CREATE TABLE USER_ROLE (
    user_id     int not null,
    role_id     int not null,

    constraint user_role_fk_1 foreign key (user_id) references USER,
    constraint user_role_fk_2 foreign key (role_id) references ROLE,
    primary key (user_id, role_id)
);


CREATE TABLE AUTHOR (
    id                  int not null IDENTITY,
    civility            char(2) default 'MR',
    first_name          varchar(100) not null,
    last_name           varchar(100),
    email               varchar(100),
    birth_date          date,
    birth_date_time     timestamp,
    favorite_author_id  int,
    primary key (id)
);
COMMENT ON TABLE AUTHOR IS 'Author has various dates for demo';


ALTER TABLE AUTHOR ADD constraint account_fk_1 foreign key (favorite_author_id) references AUTHOR;

CREATE TABLE BOOK (
    id                      int not null IDENTITY,
    title                   varchar(100) not null,
    summary                 varchar(255),

-- celerio convention for file upload/download:
    extract_binary             bytea,
    extract_file_name          varchar(100),
    extract_content_type       varchar(100),
    extract_size               NUMERIC (11),

    author_id               int not null,
    co_author_id            int,
    publication_date        date,
    best_seller             boolean default false,
    price                   decimal(20, 2) not null,

    constraint book_fk_1 foreign key (author_id) references AUTHOR,
    constraint book_fk_2 foreign key (co_author_id) references AUTHOR,
    primary key (id)
);
COMMENT ON TABLE BOOK IS 'BOOK supports file upload/download for demo';


CREATE TABLE PROJECT (
    id                      int not null IDENTITY,
    name                    varchar(100) not null,
    url                     varchar(100),
    author_id               int not null,
    open_source             boolean default false,

    constraint project_fk_1 foreign key (author_id) references AUTHOR,
    primary key (id)
);

CREATE TABLE USE_CASE_1 (
    id1               timestamp not null,
    id2               varchar(100) not null,
    dummy             varchar(100) not null,
    primary key (id1, id2)
);
COMMENT ON TABLE USE_CASE_1 IS 'USE_CASE_1 has a composite pk, just for demo';

CREATE TABLE USE_CASE_2 (
    id               varchar(32) not null,
    dummy             varchar(100) not null,
    primary key (id)
);
COMMENT ON TABLE USE_CASE_2 IS 'USE_CASE_2 has a string pk, just for demo';


CREATE TABLE USE_CASE_3 (
    id1               timestamp not null,
    id2               varchar(32) not null,
    dummy             varchar(100) not null,

    constraint use_case_3_fk_1 foreign key (id2) references USE_CASE_2,
    primary key (id1, id2)
);
COMMENT ON TABLE USE_CASE_3 IS 'USE_CASE_3 has a composite pk with one member being also an FK, just for demo';


INSERT INTO USER (id, login, password, email, is_enabled, version) VALUES (-1, 'admin', 'admin', 'admin@example.com', true, 1);

INSERT INTO ROLE (id, role_name) VALUES (-1, 'ROLE_ADMIN');
INSERT INTO ROLE (id, role_name) VALUES (-2, 'ROLE_USER');
INSERT INTO ROLE (id, role_name) VALUES (-3, 'ROLE_MONITORING');

INSERT INTO USER_ROLE (user_id, role_id) VALUES (-1, -1);
INSERT INTO USER_ROLE (user_id, role_id) VALUES (-1, -2);
INSERT INTO USER_ROLE (user_id, role_id) VALUES (-1, -3);

INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-1,  'John01', 'Doe01');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-2,  'John02', 'Doe02');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-3,  'John03', 'Doe03');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-4,  'John04', 'Doe04');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-5,  'John05', 'Doe05');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-6,  'John06', 'Doe06');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-7,  'John07', 'Doe07');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-8,  'John08', 'Doe08');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-9,  'John09', 'Doe09');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-10, 'John10', 'Doe10');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-11, 'John11', 'Doe11');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-12, 'John12', 'Doe12');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-13, 'John13', 'Doe13');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-14, 'John14', 'Doe14');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-15, 'John15', 'Doe15');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-16, 'John16', 'Doe16');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-17, 'John17', 'Doe17');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-18, 'John18', 'Doe18');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-19, 'John19', 'Doe19');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-20, 'John20', 'Doe20');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-21, 'John21', 'Doe21');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-22, 'John22', 'Doe22');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-23, 'Alice', 'Bee');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-24, 'Bob', 'Sponge');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-25, 'Mick', 'Jagger');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-26, 'Charlie', 'Watts');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-27, 'Bob', 'Dylan');
INSERT INTO AUTHOR(id, first_name, last_name)  VALUES (-28, 'Jim', 'Morrison');

INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-1, 'Learn Angular', 'Angular for beginners', -1, null, false, 12.34);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-2, 'Learn Angular2', 'Angular2 for beginners', -1, null, true, 32.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-3, 'Book 3', 'The Book 3', -1, null, true, 11.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-4, 'Book 4', 'The Book 4', -1, null, true, 4.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-5, 'Book 5', 'The Book 5', -1, null, true, 3.50);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-6, 'Book 6', 'The Book 6', -1, null, true, 36.30);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-7, 'Book 7', 'The Book 7', -1, null, true, 30.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-8, 'Book 8', 'The Book 8', -1, null, true, 27.72);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-9, 'Book 9', 'The Book 9', -1, null, true, 39.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-10, 'Book 10', 'The Book 10', -1, null, true, 14.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-11, 'Book 11', 'The Book 11', -1, null, true, 35.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-12, 'Book 12', 'The Book 12', -1, null, true, 90.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-13, 'Book 13', 'The Book 13', -2, null, true, 120.00);
INSERT INTO BOOK(id, title, summary, author_id, publication_date, best_seller, price) VALUES (-14, 'Book 14', 'The Book 14', -2, null, true, 99.00);

INSERT INTO PROJECT(id, name, url, author_id, open_source) VALUES (-1, 'PrimeNG', 'http://www.primefaces.org/primeng/', -1, true);
