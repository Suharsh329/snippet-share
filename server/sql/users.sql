CREATE TABLE IF NOT EXISTS users (
  uid SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	username TEXT UNIQUE NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL,
	profile_pic TEXT NOT NULL DEFAULT 'profile_pics/default.png',
	links TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[]
);

INSERT INTO users (name, username, email, password, profile_pic, links) VALUES ('Stacy Ionnidis', 'sionnidis0', 'sionnidis0@biblegateway.com', 'FdvqGsyIdG', 'sionnidis0', ARRAY['https://linkedin.com/vestibulum/ante/ipsum.json','']);
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Jeannine Popelay', 'jpopelay1', 'jpopelay1@wp.com', 'CFWKbJ', 'jpopelay1');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Robinson Mazzeo', 'rmazzeo2', 'rmazzeo2@army.mil', 'nmoGbOcgukx', 'rmazzeo2');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Inness Scottini', 'iscottini3', 'iscottini3@intel.com', 'dSJ0p8', 'iscottini3');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Andria Lett', 'alett4', 'alett4@mit.edu', '4rxCjvPEE', 'alett4');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Ariel Balassa', 'abalassa5', 'abalassa5@oracle.com', 'IranqqMw', 'abalassa5');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Haskel Brandassi', 'hbrandassi6', 'hbrandassi6@purevolume.com', 'cICfEk', 'hbrandassi6');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Basilius Vogel', 'bvogel7', 'bvogel7@ebay.com', 'BUB25xLCY', 'bvogel7');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Ignace Feldhuhn', 'ifeldhuhn8', 'ifeldhuhn8@blogtalkradio.com', '8Caev6', 'ifeldhuhn8');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Nicole Lodwick', 'nlodwick9', 'nlodwick9@cpanel.net', 'YZMcEcZZ62T', 'nlodwick9');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Sibyl Izen', 'sizena', 'sizena@reference.com', 'sb9R74x', 'sizena');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Koren Vannar', 'kvannarb', 'kvannarb@histats.com', 'vY50009lO9F', 'kvannarb');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Nataniel Garnsworth', 'ngarnsworthc', 'ngarnsworthc@ifeng.com', 'YvXSau', 'ngarnsworthc');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Aggie Dyble', 'adybled', 'adybled@sina.com.cn', 'Xcc2xr', 'adybled');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Ursulina Cartlidge', 'ucartlidgee', 'ucartlidgee@addtoany.com', 'Y2WbzbnvtPog', 'ucartlidgee');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Matthias Billiard', 'mbilliardf', 'mbilliardf@wordpress.org', '7ox8r2zp', 'mbilliardf');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Page Godley', 'pgodleyg', 'pgodleyg@foxnews.com', 'RCi41heZPy', 'pgodleyg');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Abigael Lendrem', 'alendremh', 'alendremh@mac.com', '7mt1VcDJ', 'alendremh');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Inesita Berardt', 'iberardti', 'iberardti@mtv.com', 'kg8edfeGf', 'iberardti');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Tallulah Norcock', 'tnorcockj', 'tnorcockj@umich.edu', 'gfAhPy1rX', 'tnorcockj');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Millicent Blockwell', 'mblockwellk', 'mblockwellk@soundcloud.com', 'SbmasV', 'mblockwellk');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Sibella Boow', 'sboowl', 'sboowl@amazon.co.jp', 'znhF7ZwoOx5', 'sboowl');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Aveline Glauber', 'aglauberm', 'aglauberm@blogger.com', 'QSNoAh1Bcjng', 'aglauberm');
INSERT INTO users (name, username, email, password, profile_pic) VALUES ('Florette Billington', 'fbillingtonn', 'fbillingtonn@boston.com', 'wUarzS0VXiD', 'fbillingtonn');