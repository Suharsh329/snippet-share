CREATE TABLE IF NOT EXISTS snippets_tags(id SERIAL PRIMARY KEY, sid INT REFERENCES snippets(sid), tid INT REFERENCES tags(tid));

INSERT INTO snippets_tags(sid, tid) VALUES(1, 14);
INSERT INTO snippets_tags(sid, tid) VALUES(1, 10);
INSERT INTO snippets_tags(sid, tid) VALUES(1, 21);
INSERT INTO snippets_tags(sid, tid) VALUES(2, 19);
INSERT INTO snippets_tags(sid, tid) VALUES(3, 16);
INSERT INTO snippets_tags(sid, tid) VALUES(3, 31);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 17);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 22);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 34);