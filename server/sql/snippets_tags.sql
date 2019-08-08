CREATE TABLE IF NOT EXISTS snippets_tags(id SERIAL PRIMARY KEY, sid INT REFERENCES snippets(sid), tid INT REFERENCES tags(tid));

INSERT INTO snippets_tags(sid, tid) VALUES(1, 23);
INSERT INTO snippets_tags(sid, tid) VALUES(1, 25);
INSERT INTO snippets_tags(sid, tid) VALUES(1, 29);
INSERT INTO snippets_tags(sid, tid) VALUES(2, 21);
INSERT INTO snippets_tags(sid, tid) VALUES(3, 18);
INSERT INTO snippets_tags(sid, tid) VALUES(3, 33);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 19);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 22);
INSERT INTO snippets_tags(sid, tid) VALUES(4, 34);