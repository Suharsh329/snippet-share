CREATE TABLE IF NOT EXISTS likes(lid SERIAL PRIMARY KEY, uid INT REFERENCES users(uid), sid INT REFERENCES snippets(sid));

INSERT INTO likes(uid, sid) VALUES(1, 2);
INSERT INTO likes(uid, sid) VALUES(4, 1);
INSERT INTO likes(uid, sid) VALUES(2, 1);
INSERT INTO likes(uid, sid) VALUES(5, 4);
INSERT INTO likes(uid, sid) VALUES(3, 2);
INSERT INTO likes(uid, sid) VALUES(1, 3);
INSERT INTO likes(uid, sid) VALUES(3, 4);
INSERT INTO likes(uid, sid) VALUES(3, 1);
INSERT INTO likes(uid, sid) VALUES(5, 1);
INSERT INTO likes(uid, sid) VALUES(4, 2);
INSERT INTO likes(uid, sid) VALUES(4, 3);
INSERT INTO likes(uid, sid) VALUES(2, 2);
INSERT INTO likes(uid, sid) VALUES(5, 2);