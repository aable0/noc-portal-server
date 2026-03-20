const updateTotalLessons = async (user, UserDB) => {
    try {
        await UserDB.updateOne({ email: user.session.email }, { $inc: { totalLessons: 1 }})
    } catch(err) {
        console.error("Error updating totalLessons:", err)
    }
}

const updateTotalLessonTime = async (user, UserDB, time) => {
    try {
        if (!time || isNaN(time)) return;
        await UserDB.updateOne({ email: user.session.email }, { $inc: { totalLessonTime: time }})
    } catch(err) {
        console.error("Error updating totalLessonTime:", err)
    }
}

module.exports = { updateTotalLessons, updateTotalLessonTime }