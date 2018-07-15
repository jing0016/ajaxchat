# ajaxchat
chat application with jquery and php

database design:

create database chat;
create table chatlog(
	  id int(11)auto_increment primary key,
    message text,
    sent_by varchar(50),
    date_created int(11)
);
