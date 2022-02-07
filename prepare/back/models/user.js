module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", { // MySQL에 users 테이블 생성
    // id: {}, // id는 기본적으로 들어있다
    email: {  // 각 컬럼
      type: DataTypes.STRING(30),  // STRING, TEXT, BOOLEAN, INTEGET, FLOAT, DATETIME
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false, // 필수
    },
  }, {
    charset: "utf8",
    collate: "utf8_general_ci", // 한글 저장
  });

  User.associate = (db) => {
    db.User.hasMany(db.Post);  // 사람이 포스트를 여러개 가질 수 있다
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" }); // 중간 테이블 이름 정하기 { through: "Like"}
  };

  return User;
}