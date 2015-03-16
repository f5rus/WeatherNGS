
/** Cities indexes **/
db.getCollection("Cities").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Forecast indexes **/
db.getCollection("Forecast").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Cities records **/
db.getCollection("Cities").insert({
  "_id": ObjectId("550469be9f3a518d069fc773"),
  "name": "nsk",
  "title": "Новосибирск",
  "lat": 55.017639,
  "lng": 82.88898
});
db.getCollection("Cities").insert({
  "_id": ObjectId("55046a0c9f3a518d069fc774"),
  "name": "omsk",
  "title": "Омск",
  "lat": 54.981542,
  "lng": 73.365752
});
db.getCollection("Cities").insert({
  "_id": ObjectId("55046a3f9f3a518d069fc775"),
  "name": "tomsk",
  "title": "Томск",
  "lat": 56.500714,
  "lng": 84.988718
});

/** Forecast records **/
db.getCollection("Forecast").insert({
  "_id": ObjectId("55029cbf64c57dfb16ee307d"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426234506"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502cf9d64c57d131a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426247475"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d01664c57d211a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426247656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d0ca64c57d361a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426247835"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d17e64c57d4f1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426248007"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d23164c57d6e1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426248217"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d2e664c57d831a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426248375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d39964c57d981a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426248559"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d44e64c57dad1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426248734"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d50164c57dc21a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426248917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d5b664c57dd71a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249094"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d66964c57dec1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d71e64c57d011b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249446"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d7d164c57d161b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249629"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d88664c57d2d1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249808"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d93a64c57d421b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426249994"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502d9ed64c57d571b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426250177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502daa264c57d6c1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426250347"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502db5564c57d811b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426250537"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502dc0a64c57da11b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426250710"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502dcbe64c57db61b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426250896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502dd7164c57dcb1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251066"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502de2664c57de01b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251254"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ded964c57df51b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251434"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502df8e64c57d0d1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251608"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e04164c57d2c1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251787"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e0f564c57d411c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426251975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e1a964c57d561c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426252158"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e25e64c57d6b1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426252334"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e31164c57d801c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426252510"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e3c664c57d951c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426252687"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e47964c57daa1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426252869"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e52e64c57dbf1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e5e264c57dd41c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e69564c57deb1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253406"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e74a64c57d001d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253597"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e7fd64c57d151d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e8b264c57d2a1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426253955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502e96564c57d3f1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426254136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ea1964c57d5f1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426254316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502eacd64c57d741d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426254494"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502eb8164c57d891d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426254674"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ec3664c57d9e1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426254856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ecea64c57db31d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255035"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ed9d64c57dcb1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ee5264c57dea1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255388"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ef0664c57dff1d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502efb964c57d141e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255747"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f06d64c57d291e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426255936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f12264c57d3e1e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426256108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f1d564c57d531e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426256287"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f28a64c57d681e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426256474"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f33e64c57d7d1e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426256656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f3f164c57d921e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426256827"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f4a564c57da91e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257014"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f55964c57dbe1e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f60e64c57dd31e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f6c164c57de81e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257548"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f77564c57dfd1e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257727"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f82964c57d1d1f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426257915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f8dd64c57d321f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502f99164c57d471f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258266"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fa4664c57d5c1f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fafa64c57d711f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258636"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fbad64c57d891f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258814"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fc6264c57da81f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426258998"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fd1564c57dbd1f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426259176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fdca64c57dd21f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426259356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502fe7e64c57de71f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426259535"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ff3164c57dfc1f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426259716"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5502ffe564c57d11208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426259890"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503009a64c57d26208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260078"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503014d64c57d3b208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503020164c57d50208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550302b564c57d67208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260614"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503036a64c57d7c208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260795"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503041d64c57d91208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426260967"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550304d164c57da6208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426261151"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503058664c57dbb208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426261336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503063a64c57ddb208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426261507"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550306ed64c57df0208b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426261695"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550307a364c57d05218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426261877"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503085564c57d1a218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262047"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503090a64c57d2f218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262235"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550309be64c57d47218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262409"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030a7164c57d66218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262587"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030b2564c57d7b218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030bda64c57d90218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426262950"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030c8d64c57da5218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426263136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030d4164c57dba218b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426263316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030df564c57dcf218b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426263488"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030ea964c57de4218b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426263676"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55030f5d64c57df9218b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426263846"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503101164c57d0e228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264034"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550310c664c57d25228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264208"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503117964c57d3a228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264394"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503122d64c57d4f228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550312e164c57d64228b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264750"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503139564c57d79228b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426264936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503144a64c57d99228b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426265110"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550314fe64c57dae228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426265296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550315b164c57dc3228b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426265476"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503166664c57dd8228b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426265655"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503171964c57ded228b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426265827"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550317ce64c57d05238b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266007"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503188164c57d24238b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266194"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503193564c57d39238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550319e964c57d4e238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266555"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031a9e64c57d63238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031b5164c57d78238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426266915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031c0664c57d8d238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267087"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031cb964c57da2238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031d6e64c57db7238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267447"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031e2264c57dcc238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267636"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031ed564c57de3238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267808"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55031f8964c57df8238b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426267994"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503203d64c57d0d248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426268176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550320f264c57d22248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426268356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550321a664c57d37248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426268534"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503225964c57d57248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426268714"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503230d64c57d6c248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426268896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550323c264c57d81248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503247564c57d96248b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503256564c57dae268b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269440"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550325de64c57dbf268b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269607"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503269164c57dda288b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503274664c57def288b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426269967"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550327f964c57d04298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426270147"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550328ad64c57d19298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426270334"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503296264c57d2e298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426270514"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032a1664c57d43298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426270689"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032ac964c57d58298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426270866"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032b7e64c57d6d298b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032c3264c57d7e2b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271235"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032ce564c57d952b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032d9964c57daa2b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032e4e64c57dbf2b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032f0164c57dd42b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426271955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55032fb564c57de92b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426272135"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503306964c57d092c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426272316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503311d64c57d1e2c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426272494"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550331d164c57d332c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426272675"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503328564c57d482c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426272856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503333964c57d5d2c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550333ee64c57d752c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550334a164c57d942c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503355564c57da92c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503360a64c57dbe2c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273755"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550336bd64c57dd32c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426273927"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503377264c57de82c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426274108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503382664c57dfd2c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426274296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550338d964c57d122d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426274476"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503398d64c57d272d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426274648"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033a4164c57d3c2d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426274837"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033af664c57d532d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033ba964c57d682d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275189"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033c5d64c57d7d2d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033d1164c57d922d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033dc564c57da72d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033e7a64c57dc72d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426275917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033f2d64c57ddc2d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55033fe164c57df12d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503409664c57d062e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276449"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503414964c57d1b2e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550341fd64c57d332e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276815"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550342b164c57d522e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426276997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503436664c57d672e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426277177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503441964c57d7c2e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426277356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550344ce64c57d912e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426277536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503458164c57da62e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426277708"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503463564c57dbb2e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426277896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550346e964c57dd02e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278077"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503479d64c57de52e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503485164c57dfa2e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278430"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503490664c57d112f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550349b964c57d262f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034a6e64c57d3b2f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426278978"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034b2264c57d502f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426279157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034bd564c57d652f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426279337"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034c8964c57d852f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426279515"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034d3e64c57d9a2f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426279697"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034df164c57daf2f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426279868"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034ea664c57dc42f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55034f5964c57dd92f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280235"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503500d64c57df12f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280417"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550350c264c57d10308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280588"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503517564c57d25308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280777"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503522964c57d3a308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426280955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550352df64c57d4f308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426281138"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503539264c57d64308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426281311"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503544564c57d79308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426281497"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550354f964c57d8e308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426281668"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550355ae64c57da3308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426281848"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503566164c57db8308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282035"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503571664c57dcf308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282208"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550357c964c57de4308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282398"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503587d64c57df9308b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503593164c57d0e318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282755"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550359e564c57d23318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426282936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035a9a64c57d43318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426283108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035b4d64c57d58318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426283297"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035c0164c57d6d318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426283469"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035cb664c57d82318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426283657"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035d6a64c57d97318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426283835"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035e1e64c57daf318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035ed264c57dce318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55035f8564c57de3318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284368"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503603a64c57df8318b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284547"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550360ed64c57d0d328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284737"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550361a164c57d22328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426284908"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503625664c57d37328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426285097"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503630964c57d4c328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426285278"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550363be64c57d61328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426285455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503647164c57d76328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426285638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503652664c57d8d328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426285817"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550365d964c57da2328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286024"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503668e64c57db7328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503674164c57dcc328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286347"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550367f664c57de1328b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286537"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550368a964c57d01338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286707"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503695e64c57d16338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426286888"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036a1164c57d2b338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287067"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036ac564c57d40338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287246"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036b7a64c57d55338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287436"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036c2d64c57d6d338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036ce164c57d8c338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036d9664c57da1338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426287975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036e4964c57db6338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426288157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036efe64c57dcb338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426288328"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55036fb164c57de0338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426288518"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503706564c57df5338b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426288721"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503711964c57d0a348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426288878"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550371ce64c57d1f348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289055"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503728164c57d34348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503733564c57d4b348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289409"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550373ea64c57d60348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289588"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503749d64c57d75348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289767"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503755164c57d8a348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426289958"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503760564c57d9f348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426290126"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550376ba64c57dbf348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426290316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503776d64c57dd4348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426290497"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503782264c57de9348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426290667"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550378d564c57dfe348b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426290857"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503798964c57d13358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291038"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037a3e64c57d2b358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291208"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037af164c57d4c358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037ba564c57d62358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291568"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037c5964c57d80358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291746"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037d0e64c57d95358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426291935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037dc164c57daa358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426292115"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037e7664c57dbf358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426292294"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037f2a64c57dd4358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426292475"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55037fdd64c57de9358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426292648"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503809164c57dfe358b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426292838"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503814664c57d15368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293010"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550381f964c57d2a368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293189"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550382ad64c57d3f368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293368"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503836264c57d54368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293550"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503841564c57d69368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293729"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550384c964c57d8b368b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426293911"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503857d64c57da0368b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294097"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503863264c57db5368b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550386e664c57dca368b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503879964c57ddf368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294635"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503884d64c57df7368b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294815"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503890264c57d18378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426294988"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550389b564c57d2d378b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426295176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038a6964c57d42378b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426295346"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038b1d64c57d57378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426295536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038bd264c57d6c378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426295709"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038c8564c57d81378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426295896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038d3964c57d97378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296078"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038ded64c57dac378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296257"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038ea164c57dc1378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296436"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55038f5564c57dd8378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296607"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503900964c57ded378b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296794"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550390bd64c57d02388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426296974"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503917164c57d17388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426297146"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503922664c57d2c388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426297336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550392d964c57d4e388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426297514"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503938d64c57d63388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426297696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503944164c57d78388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426297868"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550394f564c57d8d388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550395aa64c57da2388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503965d64c57dba388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503971264c57ddb388b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298598"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550397c564c57df0388b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503987a64c57d05398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426298957"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503992e64c57d1a398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426299135"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550399e164c57d2f398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426299310"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039a9564c57d44398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426299496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039b4a64c57d59398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426299678"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039bfd64c57d6e398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426299856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039cb164c57d83398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426300037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039d6664c57d9a398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426300217"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039e1964c57daf398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426300389"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039ecd64c57dc4398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426300577"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55039f8264c57dd9398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426300748"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a03564c57dee398b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426300936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a0ea64c57d103a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426301115"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a19d64c57d253a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426301295"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a25164c57d3a3a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426301466"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a30564c57d4f3a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426301657"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a3b964c57d643a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426301834"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a46e64c57d7c3a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426302016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a52164c57d9d3a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426302186"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a5d564c57db23a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426302374"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a68964c57dc73a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426302547"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a73d64c57ddc3a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426302736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a7f264c57df13a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426302909"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a8a564c57d063b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426303094"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503a95964c57d1b3b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426303267"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503aa0e64c57d303b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426303449"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503aac164c57d4e3b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426303626"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ab7564c57d653b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426303815"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ac2964c57d7a3b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426303996"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503acdd64c57d8f3b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426304176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ad9164c57da43b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426304376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ae4664c57db93b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426304528"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503aef964c57dd93b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426304716"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503afae64c57dee3b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426304887"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b06164c57d033c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426305069"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b11564c57d183c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426305256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b1ca64c57d2d3c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426305427"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b27d64c57d453c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426305616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b33164c57d643c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426305794"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b3e564c57d793c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426305975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b49a64c57d8e3c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426306158"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b54e64c57da33c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426306336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b60164c57db83c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426306516"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b6b564c57dcd3c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426306694"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b76a64c57de23c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426306869"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b81d64c57df73c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426307056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b8d164c57d0c3d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426307236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503b98564c57d233d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426307409"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ba3a64c57d383d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426307598"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503baed64c57d4d3d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426307776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bba164c57d623d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426307949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bc5664c57d773d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426308126"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bd0a64c57d973d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426308307"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bdbd64c57dac3d8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426308495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503be7164c57dc13d8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426308666"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bf2664c57dd63d8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426308849"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503bfd964c57deb3d8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426309030"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c08d64c57d033e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426309215"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c14264c57d223e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426309394"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c1f564c57d373e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426309575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c2a964c57d4c3e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426309754"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c35e64c57d613e8b4567"),
  "city": "nsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426309937"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c41164c57d763e8b4567"),
  "city": "nsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426310114"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c4c564c57d8b3e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426310296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c57a64c57da03e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426310467"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c62d64c57db53e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426310656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c6e264c57dca3e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426310836"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c79564c57de13e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c84a64c57df63e8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c8fd64c57d0b3f8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503c9b164c57d203f8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311556"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ca6664c57d353f8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311734"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cb1964c57d553f8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426311917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cbcd64c57d6a3f8b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426312087"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cc8264c57d7f3f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426312269"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cd3564c57d943f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426312454"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cde964c57da93f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426312628"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ce9d64c57dc13f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426312807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503cf5164c57de03f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426312994"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d00664c57df53f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426313168"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d0b964c57d0a408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426313351"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d16e64c57d1f408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426313558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d22164c57d34408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426313708"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d2d564c57d49408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426313895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d38964c57d5e408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426314076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d43d64c57d73408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426314257"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d4f264c57d88408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426314427"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d5a664c57d9f408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426314609"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d65964c57db4408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426314788"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d70d64c57dc9408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426314966"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d7c164c57dde408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426315155"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d87564c57df3408b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426315335"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d92964c57d13418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426315508"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503d9dd64c57d28418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426315696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503da9264c57d3d418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426315898"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503db4564c57d52418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426316048"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503dbfa64c57d67418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426316234"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503dcad64c57d7f418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426316415"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503dd6264c57d9e418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426316588"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503de1564c57db3418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426316767"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503dec964c57dc8418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426316955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503df7e64c57ddd418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426317128"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e03164c57df2418b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426317316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e0e664c57d07428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426317496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e19964c57d1c428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426317666"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e24d64c57d31428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426317848"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e30264c57d46428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426318036"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e3b564c57d5d428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426318215"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e46a64c57d72428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426318395"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e51d64c57d87428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426318568"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e5d164c57d9c428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426318756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e68664c57db1428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426318927"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e73964c57dd1428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426319109"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e7ed64c57de6428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426319289"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e8a264c57dfb428b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426319468"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503e95564c57d10438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426319656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ea0964c57d25438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426319836"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503eabe64c57d3d438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426320007"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503eb7164c57d5c438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426320194"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ec2564c57d71438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426320367"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ecd964c57d86438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426320549"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ed8e64c57d9b438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426320734"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ee4164c57db0438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426320917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503eef664c57dc5438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426321095"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503efa964c57dda438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426321265"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f05e64c57def438b4567"),
  "city": "nsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426321456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f11164c57d04448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426321628"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f1c564c57d1b448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426321816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f27964c57d30448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426321996"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f32e64c57d45448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426322176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f3e164c57d5a448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426322356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f49664c57d6f448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426322534"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f54964c57d8f448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426322718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f5fd64c57da4448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426322886"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f6b264c57db9448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426323077"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f76564c57dce448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426323247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f81a64c57de3448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426323436"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f8ce64c57dfb448b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426323616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503f98164c57d1a458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426323788"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fa3564c57d2f458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426323974"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503faea64c57d44458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426324156"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fb9d64c57d59458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426324336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fc5164c57d6e458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426324515"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fd0664c57d83458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426324688"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fdb964c57d98458b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426324874"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503fe6e64c57dad458b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426325054"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ff2164c57dc2458b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426325237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5503ffd664c57dd9458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426325416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504008a64c57dee458b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426325596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504013e64c57d03468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426325774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550401f164c57d18468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426325956"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550402a564c57d2d468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426326134"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504035964c57d4d468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426326305"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504040d64c57d62468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426326494"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550404c164c57d77468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426326669"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504057564c57d8c468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426326848"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504062964c57da1468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426327028"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550406dd64c57db9468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426327216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504079264c57dd8468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426327389"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504084564c57ded468b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426327587"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550408f964c57d02478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426327746"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550409ad64c57d17478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426327935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040a6264c57d2c478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426328109"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040b1564c57d41478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426328297"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040bca64c57d56478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426328470"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040c7e64c57d6b478b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426328655"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040d3164c57d80478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426328836"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040de564c57d97478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329014"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040e9a64c57dac478b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329187"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55040f4d64c57dc1478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329368"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504100164c57dd6478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550410b664c57deb478b4567"),
  "city": "nsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329735"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504116964c57d0b488b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426329915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504121d64c57d20488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330097"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550412d164c57d35488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504138564c57d4a488b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330454"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504143964c57d5f488b4567"),
  "city": "nsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330636"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550414ed64c57d77488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330810"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550415a164c57d96488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426330995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504165564c57dab488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426331174"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504170964c57dc0488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426331348"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550417bd64c57dd5488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426331536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504187164c57dea488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426331715"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504192564c57dff488b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426331896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550419d964c57d14498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426332074"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041a8d64c57d29498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426332247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041b4164c57d3e498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426332428"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041bf564c57d55498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426332615"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041ca964c57d6a498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426332788"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041d5d64c57d7f498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426332976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041e1164c57d94498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426333154"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041ec564c57da9498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426333336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55041f7a64c57dc9498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426333514"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504202d64c57dde498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426333696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550420e264c57df3498b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426333877"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504219564c57d084a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426334056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504224b64c57d1d4a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426334237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550422fd64c57d364a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426334407"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550423b264c57d554a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426334596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504246564c57d6a4a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426334774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504251964c57d7f4a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426334949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550425ce64c57d944a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426335135"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504268164c57da94a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426335316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504273564c57dbe4a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426335495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550427e964c57dd34a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426335666"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504289d64c57de84a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426335854"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504295164c57dfd4a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042a0564c57d144b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042ab964c57d294b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336395"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042b6e64c57d3e4b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042c2164c57d534b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042cd564c57d684b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426336928"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042d8a64c57d884b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426337111"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042e3e64c57d9d4b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426337296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042ef164c57db24b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426337478"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55042fa664c57dc74b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426337654"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504305964c57ddc4b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426337834"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504310d64c57df44b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550431c164c57d134c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338195"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504327564c57d284c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504332964c57d3d4c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338556"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550433de64c57d524c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338728"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504349164c57d674c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426338907"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504354664c57d7c4c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550435f964c57d914c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550436ae64c57da64c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339457"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504376164c57dbb4c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339630"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504381664c57dd24c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550438c964c57de74c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426339997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504397d64c57dfc4c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426340175"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043a3264c57d114d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426340354"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043ae664c57d264d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426340527"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043b9964c57d464d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426340715"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043c4d64c57d5b4d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426340896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043d0164c57d704d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043db664c57d854d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043e6964c57d9a4d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341430"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043f1d64c57db24d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341615"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55043fd264c57dd14d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341789"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504408564c57de64d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426341976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504413a64c57dfb4d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426342154"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550441ed64c57d104e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426342328"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550442a164c57d254e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426342516"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504435564c57d3a4e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426342696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504440a64c57d4f4e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426342876"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550444bd64c57d644e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426343056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504457264c57d794e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426343236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504462564c57d904e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426343429"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550446da64c57da54e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426343595"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504478d64c57dba4e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426343775"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504484164c57dcf4e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426343954"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550448f564c57de44e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426344136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550449a964c57d044f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426344314"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044a5d64c57d194f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426344497"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044b1164c57d2e4f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426344666"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044bc564c57d434f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426344856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044c7964c57d584f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345036"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044d2e64c57d704f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044de264c57d8f4f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345388"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044e9564c57da44f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044f4a64c57db94f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55044ffd64c57dce4f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426345936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550450b264c57de34f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426346117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504516564c57df84f8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426346295"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504521a64c57d0d508b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426346478"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550452ce64c57d22508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426346656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504538164c57d37508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426346829"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504543564c57d4e508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550454ea64c57d63508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347198"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504559d64c57d78508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347369"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504565164c57d8d508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347556"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504570564c57da2508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550457ba64c57dc2508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426347916"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504586d64c57dd7508b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504592264c57dec508b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348275"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550459d564c57d01518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348457"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045a8964c57d16518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045b3d64c57d2e518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348814"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045bf264c57d4d518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426348990"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045ca564c57d62518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426349168"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045d5a64c57d77518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426349357"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045e0d64c57d8c518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426349537"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045ec164c57da1518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426349718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55045f7564c57db6518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426349897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504602a64c57dcb518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426350068"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550460dd64c57de0518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426350256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504619264c57df5518b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426350428"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504624564c57d0c528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426350616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550462f964c57d21528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426350796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550463ad64c57d36528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426350975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504646264c57d4b528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426351150"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504651564c57d60528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426351338"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550465ca64c57d80528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426351517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504667d64c57d95528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426351696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504673164c57daa528b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426351875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504732464c57d10576e6a7d"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426354935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504732464c57d10576e6a7e"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426354941"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504732464c57d10576e6a7f"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426354942"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504755364c57d11576e6a7d"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426355475"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504755364c57d11576e6a7e"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426355480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504755364c57d11576e6a7f"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426355507"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504781264c57db35d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426356200"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504781264c57db35d8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426356221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504781264c57db35d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426356207"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550478c564c57dc85d8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426356376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550478c564c57dc85d8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426356411"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550478c564c57dc85d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426356387"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504797964c57ddd5d8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426356555"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504797964c57ddd5d8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426356559"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504797964c57ddd5d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426356565"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047a2d64c57df25d8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426356738"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047a2d64c57df25d8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426356741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047a2d64c57df25d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426356743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047ae264c57d075e8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426356917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047ae264c57d075e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426356922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047ae264c57d075e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426356923"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047b9564c57d1c5e8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357086"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047b9564c57d1c5e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426357094"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047b9564c57d1c5e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426357101"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047c4a64c57d315e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357269"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047c4a64c57d315e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426357275"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047c4a64c57d315e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426357281"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047cfd64c57d465e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357450"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047cfd64c57d465e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426357455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047cfd64c57d465e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426357460"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047db264c57d5b5e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357629"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047db264c57d5b5e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426357635"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047db264c57d5b5e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426357641"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047e6564c57d725e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357814"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047e6564c57d725e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426357820"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047e6564c57d725e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426357823"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047f1964c57d875e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426357995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047f1964c57d875e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426358000"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047f1964c57d875e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426358003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047fcd64c57d9c5e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426358176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047fcd64c57d9c5e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426358181"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55047fcd64c57d9c5e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426358182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504808264c57db15e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426358349"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504808264c57db15e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426358355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504808264c57db15e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426358363"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504813564c57dc65e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(754),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426358536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504813564c57dc65e8b4568"),
  "city": "omsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426358542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504813564c57dc65e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426358544"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550481ea64c57de65e8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426358710"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550481ea64c57de65e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426358716"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550481ea64c57de65e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426358722"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504829d64c57dfb5e8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426358897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504829d64c57dfb5e8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426358902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504829d64c57dfb5e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426358903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504835264c57d105f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359075"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504835264c57d105f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426359081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504835264c57d105f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426359083"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504840564c57d255f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359255"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504840564c57d255f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426359260"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504840564c57d255f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426359261"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550484ba64c57d3a5f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359435"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550484ba64c57d3a5f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426359441"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550484ba64c57d3a5f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426359445"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504856d64c57d525f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359608"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504856d64c57d525f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426359616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504856d64c57d525f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426359621"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504862264c57d715f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504862264c57d715f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426359802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504862264c57d715f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426359805"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550486d564c57d865f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426359976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550486d564c57d865f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426359981"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550486d564c57d865f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426359983"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504878964c57d9b5f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426360157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504878964c57d9b5f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426360162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504878964c57d9b5f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426360163"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504883d64c57db05f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426360338"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504883d64c57db05f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426360342"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504883d64c57db05f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426360344"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550488f164c57dc55f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426360515"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550488f164c57dc55f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426360521"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550488f164c57dc55f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426360522"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550489a564c57dda5f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426360695"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550489a564c57dda5f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426360700"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550489a564c57dda5f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426360701"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048a5964c57def5f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426360875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048a5964c57def5f8b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426360880"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048a5a64c57def5f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426360882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048b0d64c57d04608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426361056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048b0d64c57d04608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048b0d64c57d04608b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426361067"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048bc164c57d19608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426361237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048bc164c57d19608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361242"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048bc164c57d19608b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426361246"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048c7564c57d30608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426361415"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048c7564c57d30608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361420"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048c7564c57d30608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426361427"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048d2964c57d45608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426361598"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048d2964c57d45608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361610"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048d2964c57d45608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426361604"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ddd64c57d5a608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426361776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ddd64c57d5a608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361782"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ddd64c57d5a608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426361783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048e9264c57d6f608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426361956"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048e9264c57d6f608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426361962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048e9264c57d6f608b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426361964"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048f4564c57d84608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426362137"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048f4564c57d84608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426362142"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048f4564c57d84608b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426362143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ffa64c57da4608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426362337"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ffa64c57da4608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426362322"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55048ffa64c57da4608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426362329"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550490ad64c57db9608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426362495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550490ad64c57db9608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426362501"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550490ad64c57db9608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426362506"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504916264c57dce608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426362668"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504916264c57dce608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426362676"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504916264c57dce608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426362682"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504921564c57de3608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426362856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504921564c57de3608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426362862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504921564c57de3608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426362863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550492c964c57df8608b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363030"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550492c964c57df8608b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426363038"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550492c964c57df8608b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426363042"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504937e64c57d10618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363215"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504937e64c57d10618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426363221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504937e64c57d10618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426363223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504943164c57d2f618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363386"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504943164c57d2f618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426363395"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504943164c57d2f618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426363407"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550494e664c57d44618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363577"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550494e664c57d44618b4568"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426363583"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504959964c57d59618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363757"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504959964c57d59618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426363762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504959964c57d59618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426363763"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504964e64c57d6e618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426363937"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504964e64c57d6e618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426363942"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504964e64c57d6e618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426363943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504970164c57d83618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426364116"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504970164c57d83618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426364120"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504970164c57d83618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426364128"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550497b664c57d98618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426364288"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550497b664c57d98618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426364296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550497b664c57d98618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426364302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504986964c57dad618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426364478"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504986964c57dad618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426364482"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504986964c57dad618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426364488"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504991d64c57dc2618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426364649"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504991d64c57dc2618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426364655"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504991d64c57dc2618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426364663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550499d164c57dd7618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426364837"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550499d164c57dd7618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426364842"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550499d164c57dd7618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426364846"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049a8564c57dee618b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426365016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049a8564c57dee618b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426365022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049a8564c57dee618b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049b3a64c57d03628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049b3a64c57d03628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426365202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049b3a64c57d03628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049bed64c57d18628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365368"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049bed64c57d18628b4568"),
  "city": "omsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426365375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049bed64c57d18628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365386"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ca164c57d2d628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ca164c57d2d628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426365562"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ca164c57d2d628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365565"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049d5564c57d42628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365737"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049d5564c57d42628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426365743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049d5564c57d42628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049e0964c57d62628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365908"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049e0964c57d62628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426365915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049e0964c57d62628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426365922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ebe64c57d77628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366095"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ebe64c57d77628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426366101"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049ebe64c57d77628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049f7164c57d8c628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366268"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049f7164c57d8c628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426366275"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55049f7164c57d8c628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366282"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a02664c57da1628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366448"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a02664c57da1628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426366456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a02664c57da1628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366462"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a0d964c57db6628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366635"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a0d964c57db6628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426366641"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a0d964c57db6628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366643"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a18e64c57dce628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a18e64c57dce628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426366820"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a18e64c57dce628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a24164c57ded628b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426366991"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a24164c57ded628b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426366996"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a24164c57ded628b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a2f664c57d02638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a2f664c57d02638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426367182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a2f664c57d02638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367186"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a3a964c57d17638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367348"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a3a964c57d17638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426367355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a3a964c57d17638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367361"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a45e64c57d2c638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367531"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a45e64c57d2c638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426367537"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a45e64c57d2c638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a51164c57d41638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a51164c57d41638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426367722"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a51164c57d41638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367725"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a5c664c57d56638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367898"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a5c664c57d56638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426367900"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a5c664c57d56638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426367902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a67964c57d6b638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a67964c57d6b638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426368081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a67964c57d6b638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368082"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a72e64c57d80638b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368248"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a72e64c57d80638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426368254"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a72e64c57d80638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426368261"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a7e164c57d95638b4567"),
  "city": "nsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a7e164c57d95638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426368443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a7e164c57d95638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426368444"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a89664c57dac638b4567"),
  "city": "nsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a89664c57dac638b4568"),
  "city": "omsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426368622"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a89664c57dac638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426368623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a94a64c57dc1638b4567"),
  "city": "nsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368789"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a94a64c57dc1638b4568"),
  "city": "omsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426368796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a94a64c57dc1638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426368803"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a9fd64c57dd6638b4567"),
  "city": "nsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426368967"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a9fd64c57dd6638b4568"),
  "city": "omsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426368975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504a9fd64c57dd6638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426368981"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aab164c57deb638b4567"),
  "city": "nsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426369159"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aab164c57deb638b4568"),
  "city": "omsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426369162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aab164c57deb638b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426369167"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ab6564c57d00648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426369327"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ab6564c57d00648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426369336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ab6564c57d00648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426369342"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ac1a64c57d20648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426369515"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ac1a64c57d20648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426369522"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ac1a64c57d20648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426369524"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504accd64c57d35648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426369690"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504accd64c57d35648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426369696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504accd64c57d35648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426369702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ad8264c57d4a648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426369878"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ad8264c57d4a648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426369882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ad8264c57d4a648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426369884"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ae3564c57d5f648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370048"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ae3564c57d5f648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426370056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ae3564c57d5f648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426370063"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aee964c57d74648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aee964c57d74648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426370242"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504aee964c57d74648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426370243"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504af9e64c57d8c648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370418"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504af9e64c57d8c648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426370423"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504af9e64c57d8c648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426370424"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b05164c57dab648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370598"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b05164c57dab648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426370603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b05164c57dab648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426370604"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b10664c57dc0648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370789"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b10664c57dc0648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426370783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b10664c57dc0648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426370790"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b1b964c57dd5648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426370956"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b1b964c57dd5648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426370962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b1b964c57dd5648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426370963"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b26e64c57dea648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426371136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b26e64c57dea648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426371142"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b26e64c57dea648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426371147"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b32164c57dff648b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426371317"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b32164c57dff648b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426371322"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b32164c57dff648b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426371323"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b3d664c57d14658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426371487"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b3d664c57d14658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426371498"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b3d664c57d14658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426371502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b48b64c57d29658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426371670"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b48b64c57d29658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426371679"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b48b64c57d29658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426371683"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b53e64c57d3e658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426371857"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b53e64c57d3e658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426371862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b53e64c57d3e658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426371864"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b5f164c57d53658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426372030"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b5f164c57d53658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426372037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b5f164c57d53658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426372043"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b6a664c57d6a658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426372216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b6a664c57d6a658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426372222"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b6a664c57d6a658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426372223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b75964c57d7f658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426372397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b75964c57d7f658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426372402"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b75964c57d7f658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426372404"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b80d64c57d94658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426372603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b80d64c57d94658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426372582"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b80d64c57d94658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426372589"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b8c164c57da9658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426372757"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b8c164c57da9658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426372763"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b8c164c57da9658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426372764"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b97564c57dbe658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426372935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b97564c57dbe658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426372941"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504b97564c57dbe658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426372942"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ba2a64c57dde658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426373116"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ba2a64c57dde658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426373122"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ba2a64c57dde658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426373123"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504badd64c57df3658b4567"),
  "city": "nsk",
  "temp_current_c": "-5,9",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426373292"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504badd64c57df3658b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426373297"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504badd64c57df3658b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426373302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bb9264c57d08668b4567"),
  "city": "nsk",
  "temp_current_c": "-6",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426373476"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bb9264c57d08668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426373482"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bb9264c57d08668b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426373483"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bc4564c57d1d668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426373658"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bc4564c57d1d668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426373663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bc4564c57d1d668b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426373667"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bcfa64c57d32668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426373835"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bcfa64c57d32668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426373841"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bcfa64c57d32668b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426373843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bdad64c57d4a668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374007"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bdad64c57d4a668b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426374018"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bdad64c57d4a668b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426374025"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504be6164c57d69668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374195"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504be6164c57d69668b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426374201"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504be6164c57d69668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426374204"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bf1664c57d7e668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374370"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bf1664c57d7e668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426374377"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bf1664c57d7e668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426374383"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bfc964c57d93668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374555"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bfc964c57d93668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426374561"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504bfc964c57d93668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426374563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c07e64c57da8668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374738"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c07e64c57da8668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426374742"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c07e64c57da8668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426374752"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c13164c57dbd668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426374917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c13164c57dbd668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426374923"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c13164c57dbd668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426374924"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c1e564c57dd2668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c1e564c57dd2668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375102"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c1e564c57dd2668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426375103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c29a64c57de7668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375268"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c29a64c57de7668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375278"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c29a64c57de7668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426375283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c34d64c57dfc668b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c34d64c57dfc668b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375462"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c34d64c57dfc668b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426375463"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c40164c57d11678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375635"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c40164c57d11678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375641"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c40164c57d11678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426375645"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c4b564c57d28678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375817"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c4b564c57d28678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c4b564c57d28678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426375824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c56964c57d3d678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426375987"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c56964c57d3d678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426375996"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c56964c57d3d678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426376002"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c61e64c57d52678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(753),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426376167"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c61e64c57d52678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426376178"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c61e64c57d52678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426376182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c6d164c57d67678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426376355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c6d164c57d67678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426376361"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c6d164c57d67678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426376362"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c78564c57d7c678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426376535"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c78564c57d7c678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426376541"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c83964c57d9c678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426376706"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c83964c57d9c678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426376716"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c83964c57d9c678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426376721"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c8ed64c57db1678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426376895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c8ed64c57db1678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426376900"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c8ed64c57db1678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426376906"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c9a264c57dc6678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426377069"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c9a264c57dc6678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426377074"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504c9a264c57dc6678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426377081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ca5564c57ddb678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426377250"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ca5564c57ddb678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426377259"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ca5564c57ddb678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426377262"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cb0964c57df0678b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426377435"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cb0964c57df0678b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426377441"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cb0964c57df0678b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426377443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cbbe64c57d08688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426377617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cbbe64c57d08688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426377622"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cbbe64c57d08688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426377626"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cc7164c57d29688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426377818"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cc7164c57d29688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426377802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cc7164c57d29688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426377803"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cd2664c57d3f688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426377970"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cd2664c57d3f688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426377978"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cd2664c57d3f688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426377983"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cdd964c57d76688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426378157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cdd964c57d76688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426378162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cdd964c57d76688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426378163"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ce8d64c57d8b688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426378337"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ce8d64c57d8b688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426378344"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ce8d64c57d8b688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426378344"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cf4164c57da0688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426378517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cf4164c57da0688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426378522"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cf4164c57da0688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426378524"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cff564c57db5688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426378696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cff564c57db5688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426378702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504cff564c57db5688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426378703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d0aa64c57dca688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426378869"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d0aa64c57dca688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426378876"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d0aa64c57dca688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426378885"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d15d64c57ddf688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379048"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d15d64c57ddf688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379054"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d15d64c57ddf688b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426379064"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d21264c57df4688b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d21264c57df4688b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379242"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d21264c57df4688b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426379246"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d2c664c57d0b698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379414"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d2c664c57d0b698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379420"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d2c664c57d0b698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426379423"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d37964c57d20698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379597"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d37964c57d20698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379605"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d37964c57d20698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426379612"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d42e64c57d35698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379795"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d42e64c57d35698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379780"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d42e64c57d35698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426379783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d4e164c57d4a698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426379948"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d4e164c57d4a698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426379957"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d4e164c57d4a698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426379968"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d59564c57d5f698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426380129"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d59564c57d5f698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426380135"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d59564c57d5f698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426380142"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d64a64c57d81698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426380309"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d64a64c57d81698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426380317"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d64a64c57d81698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426380321"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d6fd64c57d96698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426380497"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d6fd64c57d96698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426380502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d6fd64c57d96698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426380503"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d7b164c57dab698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426380668"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d7b164c57dab698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426380699"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d7b164c57dab698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426380684"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d86664c57dc0698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426380857"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d86664c57dc0698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426380862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d86664c57dc0698b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426380863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d91964c57dd4698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426381035"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d91964c57dd4698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381041"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d91964c57dd4698b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426381043"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d9ce64c57deb698b4567"),
  "city": "nsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426381208"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d9ce64c57deb698b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381219"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504d9ce64c57deb698b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504da8164c57d0c6a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426381395"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504da8164c57d0c6a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426381400"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504da8164c57d0c6a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381407"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504db3664c57d216a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426381575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504db3664c57d216a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504db3664c57d216a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381582"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dbe964c57d366a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426381757"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dbe964c57d366a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426381762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dbe964c57d366a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381764"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dc9d64c57d4c6a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426381929"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dc9d64c57d4c6a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426381938"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dc9d64c57d4c6a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426381943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dd5164c57d616a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426382108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dd5164c57d616a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426382114"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504dd5164c57d616a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426382117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504de0664c57d766a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426382297"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504de0664c57d766a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426382302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504de0664c57d766a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426382304"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504deb964c57d8b6a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426382477"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504deb964c57d8b6a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426382481"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504deb964c57d8b6a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426382483"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504df6d64c57da06a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426382657"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504df6d64c57da06a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426382677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504df6d64c57da06a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426382664"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e02264c57db56a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426382836"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e02264c57db56a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426382841"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e02264c57db56a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426382843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e0d664c57dcc6a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426383008"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e0d664c57dcc6a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383015"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e0d664c57dcc6a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e18964c57de16a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e18964c57de16a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e18964c57de16a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e23d64c57df66a8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e23d64c57df66a8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383380"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e23d64c57df66a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383387"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e2f264c57d0b6b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383556"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e2f264c57d0b6b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383555"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e2f264c57d0b6b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383567"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e3a664c57d206b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383734"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e3a664c57d206b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383735"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e3a664c57d206b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383742"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e45a64c57d426b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e45a64c57d426b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426383921"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e45a64c57d426b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426383922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e50d64c57d576b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384089"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e50d64c57d576b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384099"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e50d64c57d576b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e5c164c57d6c6b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e5c164c57d6c6b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426384280"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e5c164c57d6c6b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384284"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e67664c57d816b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426384448"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e67664c57d816b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426384454"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e67664c57d816b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384461"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e72964c57d966b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426384637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e72964c57d966b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426384641"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e72964c57d966b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426384643"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e7de64c57dae6b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426384817"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e7de64c57dae6b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426384824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e7de64c57dae6b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426384825"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e89264c57dcf6b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426384995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e89264c57dcf6b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385000"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e89264c57dcf6b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385002"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e94564c57de46b8b4567"),
  "city": "nsk",
  "temp_current_c": "-6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426385177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e94564c57de46b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e94564c57de46b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385186"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e9f964c57df96b8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426385347"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e9f964c57df96b8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385354"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504e9f964c57df96b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385357"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eaae64c57d0e6c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426385536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eaae64c57d0e6c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eaae64c57d0e6c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385548"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eb6264c57d236c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426385709"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eb6264c57d236c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385717"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eb6264c57d236c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385721"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ec1564c57d386c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426385897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ec1564c57d386c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ec1564c57d386c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426385904"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ecca64c57d4d6c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386078"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ecca64c57d4d6c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386084"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ecca64c57d4d6c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386091"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ed7e64c57d626c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ed7e64c57d626c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386261"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ed7e64c57d626c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426386263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ee3164c57d776c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386429"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ee3164c57d776c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386435"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ee3164c57d776c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386440"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eee564c57d8e6c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eee564c57d8e6c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386622"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504eee564c57d8e6c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426386623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ef9964c57da36c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ef9964c57da36c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ef9964c57da36c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426386809"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f04d64c57db86c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426386978"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f04d64c57db86c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426386982"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f04d64c57db86c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426386984"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f10264c57dcd6c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426387157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f10264c57dcd6c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387164"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f10264c57dcd6c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426387171"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f1b564c57de26c8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426387328"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f1b564c57de26c8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387333"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f1b564c57de26c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387341"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f26964c57d046d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426387510"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f26964c57d046d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387516"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f26964c57d046d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,5",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387524"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f31e64c57d196d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426387697"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f31e64c57d196d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f31e64c57d196d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,4",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387704"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f3d264c57d2e6d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426387875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f3d264c57d2e6d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387881"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f3d264c57d2e6d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426387882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f48664c57d436d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f48664c57d436d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426388062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f48664c57d436d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-6,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426388063"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f53964c57d586d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388235"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f53964c57d586d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426388240"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f53964c57d586d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,9",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426388245"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f5ed64c57d706d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388406"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f5ed64c57d706d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426388416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f5ed64c57d706d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426388421"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f6a164c57d916d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388598"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f6a164c57d916d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426388602"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f6a164c57d916d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,8",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426388604"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f75564c57da66d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388777"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f75564c57da66d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426388789"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f75564c57da66d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426388796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f80964c57dbb6d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426388957"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f80964c57dbb6d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426388962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f80964c57dbb6d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426388969"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f8bd64c57dd06d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426389136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f8bd64c57dd06d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389141"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f8bd64c57dd06d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389147"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f97164c57dee6d8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426389314"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f97164c57dee6d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389320"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504f97164c57dee6d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389328"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fa2664c57d036e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426389497"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fa2664c57d036e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fa2664c57d036e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,7",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389507"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fad964c57d186e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426389667"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fad964c57d186e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389681"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fad964c57d186e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389683"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fb8e64c57d2d6e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426389856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fb8e64c57d2d6e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426389862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fb8e64c57d2d6e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426389868"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fc4164c57d426e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426390037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fc4164c57d426e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426390042"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fc4164c57d426e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426390043"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fcf664c57d596e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426390207"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fcf664c57d596e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426390218"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fcf664c57d596e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,6",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426390223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fda964c57d6e6e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426390387"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fda964c57d6e6e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426390397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fda964c57d6e6e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,5",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426390404"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fe5d64c57d836e8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426390577"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fe5d64c57d836e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426390582"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504fe5d64c57d836e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426390594"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ff1164c57d166f8b4567"),
  "city": "nsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426390749"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ff1164c57d166f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426390756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ff1164c57d166f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426390762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ffc564c57d8e6f8b4567"),
  "city": "nsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426390934"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ffc564c57d8e6f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426390940"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5504ffc564c57d8e6f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426390946"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505007a64c57dae6f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426391114"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505007a64c57dae6f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426391120"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505007a64c57dae6f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426391121"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505012d64c57dc36f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426391296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505012d64c57dc36f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426391296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505012d64c57dc36f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426391302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550501e264c57dd86f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426391465"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550501e264c57dd86f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426391474"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550501e264c57dd86f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426391480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505029664c57ded6f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426391648"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505029664c57ded6f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426391656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505029664c57ded6f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-5",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426391661"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505034964c57d02708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426391828"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505034964c57d02708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426391835"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505034964c57d02708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426391843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550503fd64c57d1a708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550503fd64c57d1a708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550503fd64c57d1a708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426392023"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550504b164c57d39708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392195"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550504b164c57d39708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392200"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550504b164c57d39708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426392203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505056564c57d4e708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505056564c57d4e708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392377"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505056564c57d4e708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426392380"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505061964c57d63708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505061964c57d63708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392562"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505061964c57d63708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426392564"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550506cd64c57d78708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392727"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550506cd64c57d78708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392733"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550506cd64c57d78708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426392743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505078164c57d8d708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426392914"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505078164c57d8d708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426392920"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505078164c57d8d708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426392928"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505083664c57da2708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426393095"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505083664c57da2708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426393100"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505083664c57da2708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426393105"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550508e964c57db7708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426393267"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550508e964c57db7708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426393277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550508e964c57db7708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426393281"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505099d64c57dcc708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426393448"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505099d64c57dcc708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426393456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505099d64c57dcc708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426393462"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050a5264c57de1708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426393638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050a5264c57de1708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426393642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050a5264c57de1708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426393645"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050b0564c57df8708b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426393816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050b0564c57df8708b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426393822"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050b0564c57df8708b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426393828"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050bb964c57d0d718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426393995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050bb964c57d0d718b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394000"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050bb964c57d0d718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426394003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050c6d64c57d22718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426394168"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050c6d64c57d22718b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394174"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050c6d64c57d22718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426394181"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050d2164c57d37718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426394354"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050d2164c57d37718b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050d2164c57d37718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426394366"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050dd664c57d4c718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426394536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050dd664c57d4c718b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394541"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050dd664c57d4c718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426394543"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050e8964c57d6c718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426394716"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050e8964c57d6c718b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394722"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050e8964c57d6c718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426394723"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050f3d64c57d81718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426394897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050f3d64c57d81718b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426394902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050f3d64c57d81718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426394903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050ff264c57d96718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426395076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050ff264c57d96718b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395080"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55050ff264c57d96718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426395082"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550510a564c57dab718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426395256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550510a564c57dab718b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395261"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550510a564c57dab718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426395262"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505115964c57dc0718b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426395435"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505115964c57dc0718b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395441"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505115964c57dc0718b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426395443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505120e64c57dd8718b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426395614"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505120e64c57dd8718b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395620"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505120e64c57dd8718b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426395623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550512c164c57df7718b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426395786"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550512c164c57df7718b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395794"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550512c164c57df7718b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426395796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505137564c57d0c728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426395975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505137564c57d0c728b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426395980"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505137564c57d0c728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426395981"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505142a64c57d21728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426396157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505142a64c57d21728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426396162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505142a64c57d21728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426396163"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550514dd64c57d36728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426396335"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550514dd64c57d36728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426396340"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550514dd64c57d36728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426396342"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505159264c57d4b728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426396517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505159264c57d4b728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426396522"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505159264c57d4b728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426396523"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505164664c57d60728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426396688"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505164664c57d60728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426396694"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505164664c57d60728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426396697"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550516f964c57d75728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426396875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550516f964c57d75728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426396880"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550516f964c57d75728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426396885"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550517ae64c57d8a728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426397055"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550517ae64c57d8a728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426397057"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550517ae64c57d8a728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426397062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505186164c57d9f728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426397237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505186164c57d9f728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426397236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505186164c57d9f728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426397244"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505191564c57db6728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426397409"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505191564c57db6728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426397419"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505191564c57db6728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426397423"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550519c964c57dcb728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426397588"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550519c964c57dcb728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426397594"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550519c964c57dcb728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426397597"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051a7e64c57de0728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426397768"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051a7e64c57de0728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426397774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051a7e64c57de0728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426397780"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051b3164c57df5728b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426397975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051b3164c57df5728b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426397962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051b3164c57df5728b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426397984"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051be564c57d0a738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426398134"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051be564c57d0a738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426398140"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051be564c57d0a738b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426398143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051c9a64c57d2a738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426398311"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051c9a64c57d2a738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398315"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051c9a64c57d2a738b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426398321"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051d4d64c57d3f738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426398488"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051d4d64c57d3f738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051d4d64c57d3f738b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398500"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051e0164c57d57738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426398675"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051e0164c57d57738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398680"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051e0164c57d57738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398689"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051eb664c57d6c738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426398857"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051eb664c57d6c738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051eb664c57d6c738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426398863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051f6964c57d81738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426399037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051f6964c57d81738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399040"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55051f6964c57d81738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426399045"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505201d64c57d99738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(752),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426399216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505201d64c57d99738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505201d64c57d99738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550520d164c57db8738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426399398"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550520d164c57db8738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399403"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550520d164c57db8738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426399405"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505218564c57dcd738b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426399575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505218564c57dcd738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505218564c57dcd738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426399581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505223964c57de2738b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426399774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505223964c57de2738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505223964c57de2738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426399769"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550522ed64c57df7738b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426399934"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550522ed64c57df7738b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426399939"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550522ed64c57df7738b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426399941"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550523a164c57d0c748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426400110"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550523a164c57d0c748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400116"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550523a164c57d0c748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400122"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505245664c57d21748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426400294"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505245664c57d21748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400300"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505245664c57d21748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505250964c57d36748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400474"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505250964c57d36748b4568"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400485"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550525be64c57d4b748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400657"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550525be64c57d4b748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400662"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550525be64c57d4b748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400664"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505267264c57d60748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400838"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505267264c57d60748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426400837"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505267264c57d60748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426400841"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505272564c57d77748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426401008"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505272564c57d77748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505272564c57d77748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401020"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550527da64c57d8c748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426401214"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550527da64c57d8c748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550527da64c57d8c748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426401208"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505288d64c57da1748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426401375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505288d64c57da1748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401381"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505288d64c57da1748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401387"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505294164c57db6748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401554"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505294164c57db6748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401560"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505294164c57db6748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426401563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550529f564c57dcb748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550529f564c57dcb748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550529f564c57dcb748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401742"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052aa964c57deb748b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401906"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052aa964c57deb748b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401914"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052aa964c57deb748b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426401915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052b5e64c57d00758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426402097"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052b5e64c57d00758b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426402096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052b5e64c57d00758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426402102"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052c1164c57d15758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426402274"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052c1164c57d15758b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426402280"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052c1164c57d15758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426402283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052cc664c57d2a758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426402455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052cc664c57d2a758b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426402457"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052cc664c57d2a758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426402460"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052d7964c57d3f758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426402637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052d7964c57d3f758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426402636"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052d7964c57d3f758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426402642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052e2d64c57d57758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426402814"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052e2d64c57d57758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426402820"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052e2d64c57d57758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426402824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052ee164c57d76758b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426402994"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052ee164c57d76758b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426402995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052ee164c57d76758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426403000"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052f9564c57d8b758b4567"),
  "city": "nsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426403197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052f9564c57d8b758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55052f9564c57d8b758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403189"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505304964c57da0758b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426403354"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505304964c57da0758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505304964c57da0758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403361"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550530fe64c57db5758b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426403534"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550530fe64c57db5758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403571"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550530fe64c57db5758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550531b164c57dca758b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426403715"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550531b164c57dca758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403715"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550531b164c57dca758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426403727"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505326664c57ddf758b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426403897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505326664c57ddf758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426403902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505326664c57ddf758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426403903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505331964c57df4758b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404067"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505331964c57df4758b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426404074"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505331964c57df4758b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426404080"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550533cd64c57d09768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404249"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550533cd64c57d09768b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426404255"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550533cd64c57d09768b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404267"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505348264c57d1e768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505348264c57d1e768b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426404442"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505348264c57d1e768b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426404444"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505353564c57d35768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404608"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505353564c57d35768b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426404615"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505353564c57d35768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426404626"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550535e964c57d4a768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426404796"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550535e964c57d4a768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426404802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550535e964c57d4a768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426404807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505369e64c57d5f768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426404974"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505369e64c57d5f768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426404980"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505369e64c57d5f768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426404983"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505375164c57d74768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426405155"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505375164c57d74768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426405161"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505375164c57d74768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426405162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505380564c57d89768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426405336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505380564c57d89768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426405336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505380564c57d89768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426405342"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550538b964c57da9768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426405517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550538b964c57da9768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426405515"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550538b964c57da9768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426405521"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505396d64c57dbe768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426405695"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505396d64c57dbe768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426405696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505396d64c57dbe768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426405704"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053a2264c57dd3768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426405875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053a2264c57dd3768b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426405875"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053a2264c57dd3768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426405881"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053ad564c57de8768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426406055"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053ad564c57de8768b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406060"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053ad564c57de8768b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426406061"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053b8964c57dfd768b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426406229"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053b8964c57dfd768b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406234"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053b8964c57dfd768b4569"),
  "city": "tomsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426406240"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053c3d64c57d15778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426406416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053c3d64c57d15778b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406421"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053c3d64c57d15778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426406424"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053cf164c57d34778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426406595"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053cf164c57d34778b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053cf164c57d34778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406601"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053da664c57d49778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426406767"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053da664c57d49778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426406774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053da664c57d49778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426406776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053e5964c57d5e778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426406964"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053e5964c57d5e778b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426406955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053e5964c57d5e778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426406964"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053f0e64c57d73778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426407137"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053f0e64c57d73778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426407141"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053f0e64c57d73778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426407143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053fc264c57d88778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426407309"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053fc264c57d88778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426407314"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55053fc264c57d88778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426407316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505407564c57d9d778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426407486"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505407564c57d9d778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426407496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505407564c57d9d778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426407501"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505412a64c57db2778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426407667"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505412a64c57db2778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426407674"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505412a64c57db2778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426407677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550541de64c57dc7778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426407855"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550541de64c57dc7778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426407861"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550541de64c57dc7778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426407862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505429164c57ddc778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426408038"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505429164c57ddc778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505429164c57ddc778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426408051"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505434664c57df3778b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426408207"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505434664c57df3778b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408215"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505434664c57df3778b4569"),
  "city": "tomsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426408222"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550543f964c57d08788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426408397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550543f964c57d08788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408404"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550543f964c57d08788b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426408407"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550544ae64c57d1d788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426408575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550544ae64c57d1d788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550544ae64c57d1d788b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426408581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505456164c57d32788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426408749"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505456164c57d32788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408758"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505456164c57d32788b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426408760"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505461564c57d47788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426408937"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505461564c57d47788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426408936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505461564c57d47788b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426408940"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550546c964c57d67788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426409116"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550546c964c57d67788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426409122"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550546c964c57d67788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426409123"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505477d64c57d7c788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426409294"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505477d64c57d7c788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426409295"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505477d64c57d7c788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426409300"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505483264c57d91788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426409466"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505483264c57d91788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426409475"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505483264c57d91788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426409481"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550548e564c57da6788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426409656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550548e564c57da6788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426409661"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550548e564c57da6788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426409662"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505499964c57dbb788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426409837"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505499964c57dbb788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426409842"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505499964c57dbb788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426409851"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054a4d64c57dd4788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426410017"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054a4d64c57dd4788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426410016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054a4d64c57dd4788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426410021"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054b0164c57df2788b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426410197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054b0164c57df2788b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426410202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054b0164c57df2788b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426410203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054bb564c57d07798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426410376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054bb564c57d07798b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426410377"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054bb564c57d07798b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426410381"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054c6a64c57d1c798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426410557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054c6a64c57d1c798b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426410564"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054c6a64c57d1c798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426410563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054d1d64c57d31798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426410736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054d1d64c57d31798b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426410758"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054d1d64c57d31798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426410743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054dd264c57d46798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426410906"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054dd264c57d46798b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426410955"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054dd264c57d46798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426410924"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054e8564c57d5b798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426411088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054e8564c57d5b798b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426411120"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054e8564c57d5b798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426411102"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054f3964c57d70798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426411270"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054f3964c57d70798b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426411303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054f3964c57d70798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426411282"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054fed64c57d85798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426411455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054fed64c57d85798b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426411474"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55054fed64c57d85798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426411461"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550550a264c57d9a798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426411637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550550a264c57d9a798b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426411663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550550a264c57d9a798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426411643"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505515664c57db1798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426411808"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505515664c57db1798b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426411826"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505515664c57db1798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(69),
  "last_success_update_date": "1426411820"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505520a64c57dc6798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426411989"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505520a64c57dc6798b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426412003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505520a64c57dc6798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(69),
  "last_success_update_date": "1426411998"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550552bd64c57ddb798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426412176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550552bd64c57ddb798b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426412199"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550552bd64c57ddb798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426412181"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505537264c57df0798b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426412355"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505537264c57df0798b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426412379"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505537264c57df0798b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426412362"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505542564c57d057a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426412528"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505542564c57d057a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426412570"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505542564c57d057a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426412539"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550554da64c57d257a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(751),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426412717"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550554da64c57d257a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426412721"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550554da64c57d257a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426412723"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505558d64c57d3a7a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426412895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505558d64c57d3a7a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426412915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505558d64c57d3a7a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426412901"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505564164c57d4f7a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413069"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505564164c57d4f7a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426413100"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505564164c57d4f7a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426413081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550556f664c57d647a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550556f664c57d647a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426413259"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550557aa64c57d797a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550557aa64c57d797a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426413455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550557aa64c57d797a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(68),
  "last_success_update_date": "1426413441"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505585d64c57d917a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413615"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505585d64c57d917a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426413642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505585d64c57d917a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(68),
  "last_success_update_date": "1426413625"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505591264c57db07a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505591264c57db07a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426413802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505591264c57db07a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(69),
  "last_success_update_date": "1426413804"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550559c564c57dc57a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426413976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550559c564c57dc57a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426413989"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550559c564c57dc57a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(69),
  "last_success_update_date": "1426413989"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055a7a64c57dda7a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426414158"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055a7a64c57dda7a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426414164"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055a7a64c57dda7a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426414171"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055b2d64c57def7a8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426414336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055b2d64c57def7a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426414346"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055b2d64c57def7a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426414342"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055be264c57d047b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426414517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055be264c57d047b8b4568"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426414523"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055c9664c57d197b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426414697"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055c9664c57d197b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426414701"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055c9664c57d197b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426414703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055d4964c57d2e7b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426414877"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055d4964c57d2e7b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426414882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055d4964c57d2e7b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426414883"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055dfe64c57d437b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415047"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055dfe64c57d437b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426415059"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055dfe64c57d437b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(69),
  "last_success_update_date": "1426415060"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055eb164c57d587b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415234"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055eb164c57d587b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055eb164c57d587b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(70),
  "last_success_update_date": "1426415241"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055f6664c57d6f7b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415408"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055f6664c57d6f7b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415440"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55055f6664c57d6f7b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426415421"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505601964c57d847b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415597"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505601964c57d847b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415609"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505601964c57d847b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550560ce64c57d997b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415775"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550560ce64c57d997b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415781"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550560ce64c57d997b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426415782"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505618164c57dae7b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426415956"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505618164c57dae7b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426415970"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505618164c57dae7b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426415963"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505623664c57dc37b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426416136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505623664c57dc37b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426416137"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505623664c57dc37b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426416142"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550562e964c57de37b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426416317"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550562e964c57de37b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426416326"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550562e964c57de37b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426416330"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505639d64c57df87b8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426416495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505639d64c57df87b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426416520"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505639d64c57df87b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426416503"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505645364c57d0e7c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426416677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505645364c57d0e7c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426416678"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505645364c57d0e7c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426416683"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505650564c57d237c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426416856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505650564c57d237c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426416873"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505650564c57d237c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426416862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550565ba64c57d387c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550565ba64c57d387c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417063"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550565ba64c57d387c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426417044"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505666d64c57d507c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505666d64c57d507c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417219"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505666d64c57d507c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426417222"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505672164c57d6f7c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505672164c57d6f7c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417417"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505672164c57d6f7c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426417401"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550567d664c57d847c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550567d664c57d847c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550567d664c57d847c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426417584"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505688964c57d997c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417757"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505688964c57d997c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505688964c57d997c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426417763"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505693e64c57dae7c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426417935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505693e64c57dae7c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426417947"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505693e64c57dae7c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426417942"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550569f164c57dc37c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426418117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550569f164c57dc37c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426418144"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550569f164c57dc37c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426418124"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056aa664c57dd87c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426418296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056aa664c57dd87c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426418328"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056aa664c57dd87c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426418302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056b5964c57ded7c8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426418477"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056b5964c57ded7c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426418509"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056b5964c57ded7c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426418480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056c0e64c57d027d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426418657"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056c0e64c57d027d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426418699"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056c0e64c57d027d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426418663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056cc164c57d177d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426418828"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056cc164c57d177d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426418860"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056cc164c57d177d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426418843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056d7564c57d2e7d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056d7664c57d2e7d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426419022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056d7664c57d2e7d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426419021"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056e2964c57d437d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056e2964c57d437d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(71),
  "last_success_update_date": "1426419220"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056e2964c57d437d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426419203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056ede64c57d587d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056ede64c57d587d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426419402"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056ede64c57d587d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426419382"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056f9164c57d6d7d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056f9164c57d6d7d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426419581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55056f9164c57d6d7d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426419564"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505704564c57d827d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419736"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505704564c57d827d8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(72),
  "last_success_update_date": "1426419772"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505704564c57d827d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426419741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550570f964c57da27d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426419917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550570f964c57da27d8b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426419922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550570f964c57da27d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426419924"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550571ae64c57db77d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426420096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550571ae64c57db77d8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426420107"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550571ae64c57db77d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426420103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505726164c57dcc7d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426420277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505726164c57dcc7d8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426420296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505726164c57dcc7d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426420283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505731564c57de17d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426420456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505731564c57de17d8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426420467"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505731564c57de17d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426420463"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550573ca64c57df67d8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426420637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550573ca64c57df67d8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426420638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550573ca64c57df67d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426420642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505747d64c57d0f7e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426420816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505747d64c57d0f7e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(73),
  "last_success_update_date": "1426420824"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505747d64c57d0f7e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426420831"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505753264c57d2e7e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426420997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505753264c57d2e7e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421024"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505753264c57d2e7e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550575e564c57d437e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426421175"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550575e564c57d437e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421198"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550575e564c57d437e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505769a64c57d587e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426421349"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505769a64c57d587e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421385"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505769a64c57d587e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421362"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505774d64c57d6d7e8b4567"),
  "city": "nsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426421536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505774d64c57d6d7e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421541"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505774d64c57d6d7e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505780264c57d827e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426421710"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505780264c57d827e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421719"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505780264c57d827e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421722"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550578b764c57d977e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426421896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550578b764c57d977e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426421896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550578b764c57d977e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426421902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505796964c57dac7e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426422066"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505796964c57dac7e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426422079"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505796964c57dac7e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426422081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057a1d64c57dc17e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426422256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057a1d64c57dc17e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426422264"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057a1d64c57dc17e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426422263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ad364c57dd67e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426422438"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ad364c57dd67e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426422461"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ad364c57dd67e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426422446"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057b8564c57ded7e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426422615"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057b8564c57ded7e8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426422651"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057b8564c57ded7e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426422621"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057c3964c57d027f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426422798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057c3964c57d027f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426422817"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057c3964c57d027f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426422801"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ced64c57d177f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426422976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ced64c57d177f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426422995"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057ced64c57d177f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426422982"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057da164c57d2c7f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426423150"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057da264c57d2c7f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426423158"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057da264c57d2c7f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426423163"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057e5564c57d417f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426423327"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057e5564c57d417f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426423337"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057e5564c57d417f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426423343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057f0964c57d617f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426423518"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057f0964c57d617f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426423517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057f0964c57d617f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426423523"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057fbd64c57d767f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426423694"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057fbd64c57d767f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426423702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55057fbd64c57d767f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426423702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505807264c57d8b7f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426423877"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505807264c57d8b7f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426423907"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505807264c57d8b7f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426423884"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505812564c57da07f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424048"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505812564c57da07f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426424060"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505812564c57da07f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426424057"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550581da64c57db57f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424228"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550581da64c57db57f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426424272"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550581da64c57db57f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426424239"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505828e64c57dcd7f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505828e64c57dcd7f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426424439"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505828e64c57dcd7f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426424422"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505834164c57dec7f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424591"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505834164c57dec7f8b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426424599"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505834164c57dec7f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424602"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550583f564c57d2d018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426424776"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550583f564c57d2d018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426424806"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550583f564c57d2d018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550584ad64c57d42018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426424949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550584ad64c57d42018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426424959"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550584ad64c57d42018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426424962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505855d64c57d57018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426425136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505855d64c57d57018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426425149"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505855d64c57d57018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426425143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505861164c57d6c018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426425316"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505861164c57d6c018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426425339"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505861164c57d6c018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426425323"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550586c564c57d81018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426425495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550586c564c57d81018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426425538"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550586c564c57d81018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426425502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505877964c57d96018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426425677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505877964c57d96018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426425703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505877964c57d96018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426425684"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505882d64c57dab018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426425848"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505882d64c57dab018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426425895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505882d64c57dab018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426425863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550588e164c57dc0018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426029"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550588e164c57dc0018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426426044"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550588e164c57dc0018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426426042"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505899664c57ddd018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505899664c57ddd018b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426426242"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505899664c57ddd018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426426223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058a4a64c57df3018b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426388"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058a4a64c57df3018b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426426414"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058a4a64c57df3018b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426426402"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058afd64c57d0b028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426575"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058afd64c57d0b028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426426586"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058afd64c57d0b028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426426582"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058bb164c57d21028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058bb164c57d21028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426426773"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058bb164c57d21028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426426762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058c6664c57d37028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426426935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058c6664c57d37028b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426426965"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058c6664c57d37028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426426943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058d1964c57d57028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426427108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058d1964c57d57028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426427136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058d1964c57d57028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426427121"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058dcd64c57d6c028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426427295"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058dcd64c57d6c028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426427304"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058dcd64c57d6c028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426427303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058e8264c57d81028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426427471"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058e8264c57d81028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426427509"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058e8264c57d81028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426427484"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058f3664c57d96028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426427649"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058f3664c57d96028b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426427676"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058f3664c57d96028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426427663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058fe964c57dab028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426427829"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058fe964c57dab028b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426427844"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55058fe964c57dab028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426427842"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505909e64c57dc3028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426428015"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505909e64c57dc3028b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426428038"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505909e64c57dc3028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426428022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505915164c57de2028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426428188"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505915164c57de2028b4568"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426428202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505920564c57df7028b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426428376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505920564c57df7028b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426428397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505920564c57df7028b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426428382"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550592ba64c57d0c038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426428558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550592ba64c57d0c038b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426428589"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550592ba64c57d0c038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426428564"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505936d64c57d21038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426428729"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505936d64c57d21038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426428756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505936d64c57d21038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426428741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505942264c57d36038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426428917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505942264c57d36038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426428918"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505942264c57d36038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426428921"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550594d664c57d4b038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429095"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550594d664c57d4b038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426429110"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550594d664c57d4b038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426429107"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505958964c57d60038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505958964c57d60038b4568"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426429283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550595c664c57d67038b4567"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426429331"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505963e64c57d75038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429447"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505963e64c57d75038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426429480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505963e64c57d75038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426429459"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550596f164c57d8a038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550596f164c57d8a038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426429649"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550596f164c57d8a038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426429644"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550597a664c57da1038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550597a664c57da1038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426429843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550597a664c57da1038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426429823"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505985964c57db6038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426429997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505985964c57db6038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426430004"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505985964c57db6038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430004"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505990e64c57dcb038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426430176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505990e64c57dcb038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426430201"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505990e64c57dcb038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430183"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550599c164c57de0038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426430357"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550599c164c57de0038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426430384"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550599c164c57de0038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430364"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059a7564c57df5038b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426430536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059a7564c57df5038b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426430544"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059a7564c57df5038b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059b2a64c57d15048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426430718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059b2a64c57d15048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426430741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059b2a64c57d15048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430724"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059bde64c57d2a048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426430897"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059bde64c57d2a048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426430902"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059bde64c57d2a048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426430903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059c9264c57d3f048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431077"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059c9264c57d3f048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426431082"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059c9264c57d3f048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431084"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059d4664c57d54048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431257"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059d4664c57d54048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426431262"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059d4664c57d54048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059dfa64c57d6a048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431435"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059dfa64c57d6a048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426431450"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059dfa64c57d6a048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059eae64c57d83048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059eae64c57d83048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426431621"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059eae64c57d83048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059f6164c57da1048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431797"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059f6164c57da1048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426431807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55059f6164c57da1048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431803"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a01564c57db6048b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426431976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a01564c57db6048b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432004"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a01564c57db6048b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426431983"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a0c964c57d03058b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426432157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a0c964c57d03058b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a0c964c57d03058b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426432163"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a17e64c57d4b058b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426432335"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a17e64c57d4b058b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432349"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a17e64c57d4b058b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426432343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a23164c57d84058b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426432509"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a23164c57d84058b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a23164c57d84058b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426432521"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a2e664c57d19068b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426432687"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a2e664c57d19068b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432700"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a2e664c57d19068b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426432702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a39a64c57d52068b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426432869"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a39a64c57d52068b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426432895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a39a64c57d52068b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426432883"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a44d64c57d0b078b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426433055"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a44d64c57d0b078b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426433084"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a44d64c57d0b078b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426433062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a50164c57d70078b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426433238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a50164c57d70078b4568"),
  "city": "omsk",
  "temp_current_c": "-0,4",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426433266"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a50164c57d70078b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426433246"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a5b664c57db3078b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426433407"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a5b664c57db3078b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426433437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a5b664c57db3078b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426433421"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a66964c57df4078b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426433596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a66964c57df4078b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426433624"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a66964c57df4078b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426433603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a71e64c57d09088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426433767"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a71e64c57d09088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426433784"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a71e64c57d09088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426433783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a7d264c57d1e088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426433958"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a7d264c57d1e088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(740),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426433962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a7d264c57d1e088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426433964"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a88664c57d33088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426434128"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a88664c57d33088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(74),
  "last_success_update_date": "1426434143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a88664c57d33088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426434141"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a93964c57d53088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426434317"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a93964c57d53088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426434352"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a93964c57d53088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426434323"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a9ee64c57d68088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426434495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a9ee64c57d68088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426434501"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505a9ee64c57d68088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426434503"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505aaa164c57d7d088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426434675"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505aaa164c57d7d088b4568"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426434682"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ab5564c57d92088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426434848"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ab5564c57d92088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426434856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ab5564c57d92088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426434862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ac0a64c57da7088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426435030"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ac0a64c57da7088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435046"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ac0a64c57da7088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426435042"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505acbe64c57dbf088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426435216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505acbe64c57dbf088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435241"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505acbe64c57dbf088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426435223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ad7264c57dde088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426435411"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ad7264c57dde088b4568"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426435414"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505adad64c57de5088b4567"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ae2564c57df3088b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426435567"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ae2564c57df3088b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435579"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ae2564c57df3088b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426435583"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505aeda64c57d08098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426435750"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505aeda64c57d08098b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435756"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505aeda64c57d08098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426435762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505af8d64c57d1d098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426435936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505af8d64c57d1d098b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426435941"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505af8d64c57d1d098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426435943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b04264c57d32098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426436117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b04264c57d32098b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426436125"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b04264c57d32098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426436124"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b0f564c57d47098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426436294"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b0f564c57d47098b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426436319"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b0f564c57d47098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426436303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b1aa64c57d5c098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426436477"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b1aa64c57d5c098b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426436504"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b1aa64c57d5c098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426436483"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b25d64c57d71098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426436656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b25d64c57d71098b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426436662"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b25d64c57d71098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426436663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b31164c57d86098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426436835"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b31164c57d86098b4568"),
  "city": "omsk",
  "temp_current_c": "-1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426436864"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b31164c57d86098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426436842"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b3c564c57d9d098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426437015"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b3c564c57d9d098b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426437022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b3c564c57d9d098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426437023"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b47a64c57db2098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426437195"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b47a64c57db2098b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426437201"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b47a64c57db2098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426437203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b52d64c57dc7098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426437375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b52d64c57dc7098b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426437389"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b52d64c57dc7098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426437389"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b5e264c57ddc098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426437557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b5e264c57ddc098b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426437584"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b5e264c57ddc098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426437563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b69564c57df1098b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426437735"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b69564c57df1098b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426437742"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b69564c57df1098b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426437742"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b74a64c57d110a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426437917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b74a64c57d110a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426437949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b74a64c57d110a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-2,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(88),
  "last_success_update_date": "1426437924"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b7fd64c57d260a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b7fd64c57d260a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426438098"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b7fd64c57d260a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426438103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b8b264c57d3b0a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b8b264c57d3b0a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426438282"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b8b264c57d3b0a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(89),
  "last_success_update_date": "1426438282"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b96664c57d500a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b96664c57d500a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426438470"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505b96664c57d500a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426438462"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ba1a64c57d650a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438636"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ba1a64c57d650a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426438642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ba1a64c57d650a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(90),
  "last_success_update_date": "1426438642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bacd64c57d7d0a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bacd64c57d7d0a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426438840"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bacd64c57d7d0a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426438823"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bb8264c57d9c0a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426438998"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bb8264c57d9c0a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426439004"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bb8264c57d9c0a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426439014"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bc3664c57db10a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439167"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bc3664c57db10a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426439177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bc3664c57db10a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(91),
  "last_success_update_date": "1426439182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bce964c57dc60a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439357"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bce964c57dc60a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(75),
  "last_success_update_date": "1426439369"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bce964c57dc60a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439364"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bd9d64c57ddb0a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426439536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bd9d64c57ddb0a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426439564"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bd9d64c57ddb0a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439543"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505be5164c57df00a8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439709"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505be5164c57df00a8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426439724"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505be5164c57df00a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439723"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bf0564c57d050b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426439896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bf0564c57d050b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426439939"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bf0564c57d050b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,3",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426439903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bfba64c57d1a0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440069"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bfba64c57d1a0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426440079"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505bfba64c57d1a0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426440081"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c06d64c57d2f0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440257"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c06d64c57d2f0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426440269"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c06d64c57d2f0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c12264c57d440b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440428"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c12264c57d440b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426440437"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c12264c57d440b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440442"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c1d664c57d5b0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440616"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c1d664c57d5b0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426440625"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c1d664c57d5b0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c28964c57d700b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440798"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c28964c57d700b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426440821"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c28964c57d700b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440805"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c33e64c57d850b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440968"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c33e64c57d850b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426440978"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c33e64c57d850b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426440987"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c3f164c57d9a0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441149"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c3f164c57d9a0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426441199"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c3f164c57d9a0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441161"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c4a664c57daf0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c4a664c57daf0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426441341"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c4a664c57daf0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c55a64c57dcf0b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441509"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c55a64c57dcf0b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426441536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c55a64c57dcf0b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441522"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c60d64c57de40b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441697"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c60d64c57de40b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426441724"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c60d64c57de40b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c6c264c57df90b8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426441870"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c6c264c57df90b8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426441882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c6c264c57df90b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426441883"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c77664c57d0e0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426442056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c77664c57d0e0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426442088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c77664c57d0e0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c82964c57d230c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c82964c57d230c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426442247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c82964c57d230c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442252"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c8dd64c57d3b0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442408"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c8dd64c57d3b0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(76),
  "last_success_update_date": "1426442438"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c8dd64c57d3b0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442422"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c99164c57d5a0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442589"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c99164c57d5a0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426442617"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505c99164c57d5a0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ca4564c57d6f0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442775"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ca4564c57d6f0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426442812"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ca4564c57d6f0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442782"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cafa64c57d840c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cafa64c57d840c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426442958"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cafa64c57d840c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426442962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cbad64c57d990c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cbad64c57d990c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426443177"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cbad64c57d990c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443142"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cc6264c57dae0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443310"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cc6264c57dae0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426443354"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cc6264c57dae0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443323"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cd1564c57dc30c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cd1564c57dc30c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426443516"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cd1664c57dc30c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443503"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cdc964c57dd80c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443678"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cdc964c57dd80c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426443718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cdc964c57dd80c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443682"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ce7e64c57ded0c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ce7e64c57ded0c8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426443882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ce7e64c57ded0c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426443863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cf3164c57d020d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444030"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cf3164c57d020d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426444073"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cf3164c57d020d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444043"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cfe564c57d190d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cfe564c57d190d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426444242"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505cfe564c57d190d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d09964c57d2e0d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444398"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d09964c57d2e0d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426444424"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d09964c57d2e0d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444405"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d14e64c57d430d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444568"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d14e64c57d430d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426444577"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d14e64c57d430d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444583"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d20164c57d580d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444758"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d20164c57d580d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426444781"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d20164c57d580d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444765"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d2b664c57d6d0d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444927"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d2b664c57d6d0d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426444953"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d2b664c57d6d0d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426444942"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d36a64c57d8d0d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426445108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d36a64c57d8d0d8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426445151"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d36a64c57d8d0d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445123"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d41e64c57da20d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426445295"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d41e64c57da20d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426445320"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d41e64c57da20d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d4d164c57db70d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445468"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d4d164c57db70d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426445511"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d4d164c57db70d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445481"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d58664c57dcc0d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d58664c57dcc0d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426445702"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d58664c57dcc0d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d63a64c57de10d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445837"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d63a64c57de10d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426445862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d63a64c57de10d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426445843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d6ed64c57df90d8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446015"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d6ed64c57df90d8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446039"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d6ed64c57df90d8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446023"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d7a164c57d180e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d7a164c57d180e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d7a164c57d180e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d85664c57d2d0e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446367"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d85664c57d2d0e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d85664c57d2d0e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446381"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d90a64c57d420e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d90a64c57d420e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d90a64c57d420e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d9bd64c57d570e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446735"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d9bd64c57d570e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446763"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505d9bd64c57d570e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505da7264c57d6c0e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446915"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505da7264c57d6c0e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426446953"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505da7264c57d6c0e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426446922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505db2564c57d810e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505db2564c57d810e8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426447101"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505db2564c57d810e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447102"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dbda64c57d960e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447278"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dbda64c57d960e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426447301"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dbda64c57d960e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447285"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dc8e64c57dab0e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447449"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dc8e64c57dab0e8b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426447461"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dcc964c57db20e8b4567"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426447506"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dd4164c57dc00e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447635"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dd4164c57dc00e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426447661"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dd4164c57dc00e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426447642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ddf664c57dd70e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ddf664c57dd70e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426447821"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ddf664c57dd70e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447823"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dea964c57dec0e8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426447998"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dea964c57dec0e8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426448023"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505dea964c57dec0e8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448006"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505df5d64c57d010f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448176"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505df5d64c57d010f8b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448183"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505df9964c57d080f8b4567"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426448221"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e01164c57d160f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e01164c57d160f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426448380"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e01164c57d160f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448362"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e0c664c57d2b0f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448559"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e0c664c57d2b0f8b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448554"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e10164c57d330f8b4567"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426448583"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e17a64c57d4b0f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e17a64c57d4b0f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426448741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e17a64c57d4b0f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448725"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e22d64c57d600f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448888"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e22d64c57d600f8b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426448916"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e22d64c57d600f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426448903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e2e264c57d750f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449075"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e2e264c57d750f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(741),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426449108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e2e264c57d750f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449082"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e39564c57d8a0f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449255"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e39564c57d8a0f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426449293"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e39564c57d8a0f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449264"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e44a64c57d9f0f8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449429"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e44a64c57d9f0f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426449457"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e44a64c57d9f0f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449442"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e4fd64c57db70f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449638"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e4fd64c57db70f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426449643"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e4fd64c57db70f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449626"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e5b164c57dd60f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449797"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e5b164c57dd60f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426449804"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e5b164c57dd60f8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449805"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e66564c57deb0f8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426449967"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e66564c57deb0f8b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426449992"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e71964c57d00108b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450148"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e71964c57d00108b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426450181"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e71964c57d00108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e7ce64c57d15108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450329"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e7ce64c57d15108b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e88164c57d2a108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426450517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e88164c57d2a108b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426450542"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e88164c57d2a108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450524"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e93664c57d3f108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426450696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e93664c57d3f108b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e9e964c57d54108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426450870"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e9e964c57d54108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426450879"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505e9e964c57d54108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426450882"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ea9d64c57d69108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451049"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ea9d64c57d69108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451076"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ea9d64c57d69108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451063"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eb5164c57d7e108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eb5164c57d7e108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eb5164c57d7e108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ec0564c57d95108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ec0564c57d95108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451441"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ec0564c57d95108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451424"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ecb964c57daa108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ecb964c57daa108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451610"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ecb964c57daa108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451612"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ed6d64c57dbf108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451775"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ed6d64c57dbf108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451800"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ed6d64c57dbf108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ee2264c57dd4108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(95),
  "last_success_update_date": "1426451958"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ee2264c57dd4108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426451987"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ee2264c57dd4108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426451964"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eed564c57de9108b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452127"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eed564c57de9108b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426452155"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505eed564c57de9108b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452141"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ef8a64c57d09118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452318"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ef8a64c57d09118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426452341"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ef8a64c57d09118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452331"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f03d64c57d1e118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452487"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f03d64c57d1e118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426452512"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f03d64c57d1e118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f0f164c57d33118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f0f164c57d33118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,4",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426452703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f0f164c57d33118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452685"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f1a664c57d48118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f1a664c57d48118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426452888"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f1a664c57d48118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426452863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f25964c57d5d118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453039"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f25964c57d5d118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426453062"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f25964c57d5d118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453042"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f30d64c57d75118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453207"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f30d64c57d75118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426453254"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f30d64c57d75118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f3c164c57d94118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453395"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f3c164c57d94118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,6",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426453418"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f3c164c57d94118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453403"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f47664c57da9118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453577"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f47664c57da9118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426453606"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f47664c57da9118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453583"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f52964c57dbe118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453757"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f52964c57dbe118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,5",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426453780"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f52964c57dbe118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453771"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f5de64c57dd3118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453936"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f5de64c57dd3118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426453979"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f5de64c57dd3118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426453943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f69164c57de8118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454118"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f69164c57de8118b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454125"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f6ce64c57def118b4567"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426454162"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f74664c57dfd118b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f74664c57dfd118b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426454327"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f74664c57dfd118b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,7",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f7f964c57d12128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454470"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f7f964c57d12128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426454495"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f7f964c57d12128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454483"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f8ae64c57d27128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f8ae64c57d27128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426454691"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f8ae64c57d27128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f96164c57d3c128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454838"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f96164c57d3c128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,3",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426454862"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505f96164c57d3c128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426454847"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fa1664c57d53128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455016"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fa1664c57d53128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426455061"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fa1664c57d53128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455023"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fac964c57d68128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fac964c57d68128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,2",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426455223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fac964c57d68128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455204"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fb7d64c57d7d128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fb7d64c57d7d128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426455400"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fb7d64c57d7d128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455383"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fc3164c57d92128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fc3164c57d92128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426455585"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fc3164c57d92128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455567"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fce664c57da7128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455729"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fce664c57da7128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426455759"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fce664c57da7128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fd9a64c57dc7128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455909"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fd9a64c57dc7128b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426455922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fe4d64c57ddc128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fe4d64c57ddc128b4568"),
  "city": "omsk",
  "temp_current_c": "-2,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426456124"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505fe4d64c57ddc128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ff0264c57df1128b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456277"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ff0264c57df1128b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426456301"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ff0264c57df1128b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ffb564c57d06138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456456"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ffb564c57d06138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426456480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5505ffb564c57d06138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456463"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506006964c57d1b138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456630"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506006964c57d1b138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426456648"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506006964c57d1b138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456643"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506011d64c57d33138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456838"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506011d64c57d33138b4568"),
  "city": "omsk",
  "temp_current_c": "-2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426456822"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506011d64c57d33138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456830"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550601d264c57d52138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426456998"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550601d264c57d52138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426457025"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550601d264c57d52138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457005"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506028564c57d67138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506028564c57d67138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426457203"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506028564c57d67138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506033a64c57d7c138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457347"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506033a64c57d7c138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426457396"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506033a64c57d7c138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457362"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550603ed64c57d91138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550603ed64c57d91138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426457549"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550603ed64c57d91138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457544"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550604a164c57da6138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457718"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550604a164c57da6138b4568"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457725"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506055664c57dbb138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457896"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506055664c57dbb138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426457922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506055664c57dbb138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426457906"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506060964c57dd0138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458078"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506060964c57dd0138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426458102"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506060964c57dd0138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458085"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550606be64c57de5138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426458256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550606be64c57de5138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426458268"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550606be64c57de5138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458263"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506077164c57dfa138b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426458429"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506077164c57dfa138b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426458454"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506077164c57dfa138b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458443"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506082664c57d11148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426458607"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506082664c57d11148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426458633"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506082664c57d11148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550608d964c57d26148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426458790"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550608d964c57d26148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426458834"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550608d964c57d26148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458802"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506098d64c57d3b148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426458976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506098d64c57d3b148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459005"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506098d64c57d3b148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426458982"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060a4164c57d50148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426459158"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060a4164c57d50148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459178"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060a4164c57d50148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426459166"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060af564c57d65148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426459336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060af564c57d65148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459363"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060af564c57d65148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426459343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060ba964c57d85148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426459511"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060ba964c57d85148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459538"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060ba964c57d85148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(742),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426459523"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060c5e64c57d9a148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426459696"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060c5e64c57d9a148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459724"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060c5e64c57d9a148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426459703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060d1164c57daf148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426459878"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060d1164c57daf148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426459903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060d1164c57daf148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426459883"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060dc664c57dc4148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060dc664c57dc4148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,6",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426460078"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060dc664c57dc4148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460071"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060e7964c57dd9148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460238"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060e7964c57dd9148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426460245"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060e7964c57dd9148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460246"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060f2e64c57df1148b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460418"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060f2e64c57df1148b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426460428"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060f2e64c57df1148b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460426"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060fe164c57d10158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460595"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060fe164c57d10158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426460608"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55060fe164c57d10158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460604"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506109564c57d25158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460769"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506109564c57d25158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426460793"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506109564c57d25158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506114964c57d3a158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426460949"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506114964c57d3a158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426460989"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506114964c57d3a158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426460963"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550611fd64c57d4f158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426461127"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550611fd64c57d4f158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,8",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426461166"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550611fd64c57d4f158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426461143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550612b264c57d64158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426461318"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550612b264c57d64158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426461345"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550612b264c57d64158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426461325"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506136564c57d79158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426461496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506136564c57d79158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426461518"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506136564c57d79158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426461503"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506141a64c57d8e158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426461678"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506141a64c57d8e158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426461698"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506141a64c57d8e158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426461684"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550614cd64c57da3158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426461856"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550614cd64c57da3158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426461885"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550614cd64c57da3158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426461863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506158164c57db8158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462027"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506158164c57db8158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426462054"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506158164c57db8158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462043"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506163664c57dcf158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506163664c57dcf158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426462240"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506163664c57dcf158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462223"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550616e964c57de4158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462398"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550616e964c57de4158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426462421"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550616e964c57de4158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462405"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506179e64c57df9158b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462568"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506179e64c57df9158b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426462596"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506179e64c57df9158b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462581"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506185164c57d0e168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462774"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506185164c57d0e168b4568"),
  "city": "omsk",
  "temp_current_c": "-1,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426462781"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506185164c57d0e168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462775"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506190664c57d23168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426462927"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506190664c57d23168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426462971"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506190664c57d23168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426462943"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550619b964c57d43168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426463117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550619b964c57d43168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426463131"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550619b964c57d43168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426463124"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061a6e64c57d58168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(92),
  "last_success_update_date": "1426463288"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061a6e64c57d58168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426463303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061a6e64c57d58168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426463303"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061b2164c57d6d168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426463478"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061b2164c57d6d168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426463493"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061b2164c57d6d168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426463485"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061bd564c57d82168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426463650"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061bd564c57d82168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426463673"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061bd564c57d82168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426463663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061c8964c57d97168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426463836"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061c8964c57d97168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,8",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426463850"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061c8964c57d97168b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426463843"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061d3e64c57daf168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464008"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061d3e64c57daf168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,7",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426464034"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061d3e64c57daf168b4569"),
  "city": "tomsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061df164c57dd0168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464197"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061df164c57dd0168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,6",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426464236"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061df164c57dd0168b4569"),
  "city": "tomsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061ea664c57de6168b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464376"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061ea664c57de6168b4568"),
  "city": "omsk",
  "temp_current_c": "-0,5",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426464398"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061ea664c57de6168b4569"),
  "city": "tomsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464383"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061f5964c57d04178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464558"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061f5964c57d04178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(87),
  "last_success_update_date": "1426464579"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55061f5964c57d04178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506200d64c57d19178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464729"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506200d64c57d19178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426464752"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506200d64c57d19178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464743"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550620c264c57d2e178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426464917"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550620c264c57d2e178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426464930"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550620c264c57d2e178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426464924"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506217564c57d43178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426465096"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506217564c57d43178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(86),
  "last_success_update_date": "1426465109"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506217564c57d43178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465103"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506222a64c57d58178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426465269"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506222a64c57d58178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426465283"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506222a64c57d58178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465280"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550622dd64c57d6d178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465448"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550622dd64c57d6d178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426465480"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550622dd64c57d6d178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465463"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506239164c57d82178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465628"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506239164c57d82178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426465654"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506239164c57d82178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465642"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506244664c57d99178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465807"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506244664c57d99178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426465826"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506244664c57d99178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465821"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550624f964c57dae178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426465997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550624f964c57dae178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466022"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550624f964c57dae178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466004"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550625ad64c57dc3178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466168"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550625ad64c57dc3178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466195"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550625ad64c57dc3178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466182"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506266164c57dd8178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466351"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506266164c57dd8178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466375"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506266164c57dd8178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466363"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506271664c57ded178b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506271664c57ded178b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466565"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506271664c57ded178b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466543"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550627c964c57d0f188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466717"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550627c964c57d0f188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466740"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550627c964c57d0f188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466723"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506287e64c57d24188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506287e64c57d24188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426466908"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506287e64c57d24188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426466903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506293164c57d39188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467075"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506293164c57d39188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426467088"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506293164c57d39188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467090"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550629e564c57d4e188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550629e564c57d4e188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426467274"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550629e564c57d4e188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467260"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062a9964c57d63188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467429"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062a9964c57d63188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(85),
  "last_success_update_date": "1426467440"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062a9964c57d63188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467440"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062b4d64c57d7b188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467608"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062b4d64c57d7b188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426467622"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062b4d64c57d7b188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467623"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062c0164c57d9c188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,5",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467790"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062c0164c57d9c188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426467814"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062c0164c57d9c188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467803"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062cb564c57db1188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467975"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062cb564c57db1188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426467988"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062cb564c57db1188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426467983"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062d6a64c57dc6188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468157"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062d6a64c57dc6188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426468178"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062d6a64c57dc6188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468164"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062e1e64c57ddb188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468327"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062e1e64c57ddb188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426468353"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062e1e64c57ddb188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468343"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062ed164c57df0188b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468517"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062ed164c57df0188b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426468529"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062ed164c57df0188b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468523"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062f8564c57d06198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468695"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062f8564c57d06198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426468727"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55062f8564c57d06198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468703"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506303964c57d1b198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468868"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506303964c57d1b198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426468880"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506303964c57d1b198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(743),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426468881"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550630ed64c57d30198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469056"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550630ed64c57d30198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426469068"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550630ed64c57d30198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469063"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550631a164c57d45198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469237"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550631a164c57d45198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426469258"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550631a164c57d45198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469243"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506325564c57d5c198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469416"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506325564c57d5c198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(84),
  "last_success_update_date": "1426469428"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506325564c57d5c198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469423"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506330a64c57d71198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(748),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469597"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506330a64c57d71198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426469609"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506330a64c57d71198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469603"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550633bd64c57d86198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469769"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550633bd64c57d86198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(745),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426469794"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550633bd64c57d86198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469783"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506347164c57d9b198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469951"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506347164c57d9b198b4568"),
  "city": "omsk",
  "temp_current_c": "-0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426469976"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506347164c57d9b198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426469962"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506352664c57db0198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470136"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506352664c57db0198b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(83),
  "last_success_update_date": "1426470148"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506352664c57db0198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470143"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550635d964c57dd2198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470309"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550635d964c57dd2198b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426470336"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550635d964c57dd2198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470323"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506368d64c57de7198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470496"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506368d64c57de7198b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426470502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506368d64c57de7198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470502"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506374164c57dfc198b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470677"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506374164c57dfc198b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426470688"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506374164c57dfc198b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470684"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550637f564c57d111a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470855"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550637f564c57d111a8b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426470869"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550637f564c57d111a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426470863"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550638aa64c57d261a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471037"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550638aa64c57d261a8b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(82),
  "last_success_update_date": "1426471049"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550638aa64c57d261a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471044"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506395d64c57d3e1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471216"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506395d64c57d3e1a8b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426471222"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506395d64c57d3e1a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471227"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063a1164c57d5f1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471397"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063a1164c57d5f1a8b4568"),
  "city": "omsk",
  "temp_current_c": "0",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426471401"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063a1164c57d5f1a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471404"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ac564c57d741a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471576"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ac564c57d741a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(81),
  "last_success_update_date": "1426471582"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ac564c57d741a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471586"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063b7a64c57d891a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471758"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063b7a64c57d891a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426471762"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063b7a64c57d891a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471771"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063c2d64c57d9e1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471935"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063c2d64c57d9e1a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426471944"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063c2d64c57d9e1a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426471950"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ce164c57db31a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472108"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ce164c57db31a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426472117"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063ce164c57db31a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472121"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063d9564c57dc81a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472296"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063d9564c57dc81a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,1",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(80),
  "last_success_update_date": "1426472302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063d9564c57dc81a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472302"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063e4964c57ddd1a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472478"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063e4964c57ddd1a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426472482"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063e4964c57ddd1a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472486"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063efe64c57df21a8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472656"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063efe64c57df21a8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426472661"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063efe64c57df21a8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472663"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063fb164c57d071b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472838"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063fb164c57d071b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426472842"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55063fb264c57d071b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426472844"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506406564c57d1e1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,3",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473018"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506406564c57d1e1b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473021"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506406564c57d1e1b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473024"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506411a64c57d331b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473196"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506411a64c57d331b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473202"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506411a64c57d331b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473204"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550641cd64c57d481b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473368"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550641cd64c57d481b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473377"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550641cd64c57d481b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426473380"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506428164c57d5d1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473557"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506428164c57d5d1b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(746),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473562"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506428164c57d5d1b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,2",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426473563"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506433664c57d721b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473737"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506433664c57d721b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,2",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473735"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506433664c57d721b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426473741"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550643e964c57d941b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426473910"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550643e964c57d941b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(79),
  "last_success_update_date": "1426473916"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550643e964c57d941b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426473922"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506449e64c57da91b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426474087"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506449e64c57da91b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426474093"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506449e64c57da91b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474100"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506455164c57dbe1b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474276"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506455164c57dbe1b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426474281"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506455164c57dbe1b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474285"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506460564c57dd31b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474455"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506460564c57dd31b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,3",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426474461"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506460564c57dd31b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474464"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550646b964c57de81b8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426474630"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550646b964c57de81b8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426474637"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550646b964c57de81b8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474648"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506476d64c57d001c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426474816"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506476e64c57d001c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426474822"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506476e64c57d001c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474823"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506482264c57d211c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426474997"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506482264c57d211c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426475002"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506482264c57d211c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475003"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550648d564c57d361c8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475175"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550648d564c57d361c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426475181"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("550648d564c57d361c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4,1",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475183"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506498a64c57d4b1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475350"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506498a64c57d4b1c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426475356"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("5506498a64c57d4b1c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426475363"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064a3e64c57d691c8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475527"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064a3e64c57d691c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,5",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426475536"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064a3e64c57d691c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426475543"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064af164c57d7e1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475717"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064af164c57d7e1c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426475729"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064af164c57d7e1c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426475723"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064ba664c57d931c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426475895"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064ba664c57d931c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(78),
  "last_success_update_date": "1426475900"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064ba664c57d931c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426475903"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064c5a64c57da81c8b4567"),
  "city": "nsk",
  "temp_current_c": "-4",
  "pressure_avg": NumberLong(749),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426476069"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064c5a64c57da81c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,6",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426476075"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064c5a64c57da81c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426476077"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064d0d64c57dbd1c8b4567"),
  "city": "nsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(750),
  "humidity_avg": NumberLong(93),
  "last_success_update_date": "1426476247"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064d0d64c57dbd1c8b4568"),
  "city": "omsk",
  "temp_current_c": "0,4",
  "pressure_avg": NumberLong(747),
  "humidity_avg": NumberLong(77),
  "last_success_update_date": "1426476256"
});
db.getCollection("Forecast").insert({
  "_id": ObjectId("55064d0d64c57dbd1c8b4569"),
  "city": "tomsk",
  "temp_current_c": "-3,9",
  "pressure_avg": NumberLong(744),
  "humidity_avg": NumberLong(94),
  "last_success_update_date": "1426476262"
});
