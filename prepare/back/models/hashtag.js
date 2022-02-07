module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define("Hashtag", { // MySQL에 Hashtags 테이블 생성
    // id: {}, // id는 기본적으로 들어있다
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
  });

  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });  // 다대다 관계
  };

  return Hashtag;
}