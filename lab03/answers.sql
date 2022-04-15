-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users 
ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id
FROM posts 
WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts 
WHERE user_id=26 or user_id=12;



-- Exercise 6
SELECT count(*)
FROM posts;



-- Exercise 7
SELECT user_id, count(*)
FROM comments
GROUP BY user_id
ORDER BY count DESC;



-- Exercise 8
SELECT posts.id, posts.image_url, user_id, username, first_name, last_name
FROM users 
INNER JOIN posts on users.id=posts.user_id
WHERE user_id=12 or user_id=26;



-- Exercise 9
SELECT posts.id, pub_date, following_id
FROM posts 
INNER JOIN following on posts.user_id=following.following_id
WHERE following.user_id=26;



-- Exercise 10
SELECT posts.id, pub_date, following_id, username
FROM posts 
INNER JOIN following on posts.user_id=following.following_id
INNER JOIN users on users.id = posts.user_id
WHERE following.user_id=26
ORDER BY pub_date DESC;



-- Exercise 11
INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 219, now());
INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 220, now());
INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 221, now());



-- Exercise 12
DELETE FROM bookmarks
WHERE post_id=219 or post_id=220 or post_id=221;



-- Exercise 13
UPDATE users
SET email='knick2022@gmail.com' 
WHERE first_name='Nicholas';



-- Exercise 14


