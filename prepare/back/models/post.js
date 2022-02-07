module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", { // MySQL에 Posts 테이블 생성
    // id: {}, // id는 기본적으로 들어있다
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // UserId: 1
    // PostId: 3
  }, {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci", // 이모티콘 저장
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // 게시물은 어떤 사람에 속할 수 있다 + UserId와 PostId 같은 고유 id 값에 대한 컬럼이 생긴다
    db.Post.belongsToMany(db.Hashtag, { through: "PostHshtag" });  // 다대다 관계
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // 중간 테이블 이름 정하기 { through: "Like"}
    // 나중에 as에 따라서 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 됩니다, as로 위에 것과 구별

  };

  return Post;
}