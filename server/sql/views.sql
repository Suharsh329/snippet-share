CREATE OR REPLACE VIEW guest_user AS SELECT s.sid, s.title, s.code, s.language, ARRAY_AGG(t.name) AS tags, u.username, u.profile_pic, (SELECT COUNT(l.*) FROM likes l WHERE l.sid = s.sid) AS likes FROM snippets s INNER JOIN users u ON s.uid = u.uid INNER JOIN snippets_tags s_t ON s.sid = s_t.sid INNER JOIN tags t on t.tid = s_t.tid GROUP BY s.sid, u.username, u.profile_pic;


CREATE OR REPLACE VIEW logged_in_user AS SELECT s.sid, s.title, s.code, s.language, ARRAY_AGG(t.name) AS tags, u.username, u.profile_pic, (SELECT COUNT(l.*) FROM likes l WHERE l.sid = s.sid) AS likes, EXISTS(SELECT l.lid FROM likes l WHERE l.sid = s.sid AND l.uid = ?) AS liked, EXISTS(SELECT b.bid FROM bookmarks b WHERE b.sid = s.sid AND b.uid = ?) AS bookmarked FROM snippets s INNER JOIN users u ON s.uid = u.uid INNER JOIN snippets_tags s_t ON s.sid = s_t.sid INNER JOIN tags t on t.tid = s_t.tid GROUP BY s.sid, u.username, u.profile_pic;