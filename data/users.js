const fs = require("fs");
const path = require("path");

const getAll = async () => {
  try {
    const data = await fs.readFileSync(
      path.join(__dirname, "../data") + "/post.json",
      { encoding: "utf8", flag: "r" }
    );
    const userData = JSON.parse(data);
    return userData;
  } catch (error) {
    console.log(error);
  }
};

const create = async (reqData) => {
  try {
    const data = await fs.readFileSync(
      path.join(__dirname, "../data") + "/post.json",
      { encoding: "utf8", flag: "r" }
    );
    const userData = JSON.parse(data);
    userData.push(reqData); //json array push
    fs.writeFileSync(
      path.join(__dirname, "../data") + "/post.json",
      JSON.stringify(userData)
    );
    return reqData;
  } catch (error) {
    console.log(error);
  }
};

//get one user id will pass
const getOne = async (id) => {
  try {
    const data = await fs.readFileSync(
      path.join(__dirname, "../data") + "/post.json",
      { encoding: "utf8", flag: "r" }
    );
    const userData = JSON.parse(data);
    let da = {};

    // checking id
    for (let u in userData) {
      // if id is mataching when we pass id
      if (userData[u]["id"] === id) {
        da = userData[u];
      }
    }
    return da;
  } catch (error) {
    console.log(error);
  }
};

const update = async (id, reqData) => {
  try {
    let da = {};
    if (reqData && Object.keys(reqData).length > 0) {
      const data = await fs.readFileSync(
        path.join(__dirname, "../data") + "/post.json",
        { encoding: "utf8", flag: "r" }
      );
      const userData = JSON.parse(data);
      for (let u in userData) {
        if (userData[u]["id"] === id) {
          for (let a in Object.keys(reqData)) {
            userData[u][Object.keys(reqData)[a]] =
              reqData[Object.keys(reqData)[a]];
            da = userData[u];
          }
        }
      }
      fs.writeFileSync(
        path.join(__dirname, "../data") + "/post.json",
        JSON.stringify(userData)
      );
    }
    return da; //
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  create,
  getOne,
  update,
};
