import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host:process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

}).promise()


export async function AllUser() { 
    const [rows] = await pool.query("SELECT * FROM info_character")
    return rows
}


export async function IdUser(id){
    const [rows] = await pool.query(`SELECT * FROM info_character WHERE id= ? `,[id])
    return rows[0]
}

export async function CreateUser(nome,raca,classe,talents,modalidade,build,damage){
    const result = await pool.query(`INSERT INTO info_character (nome,raca,classe,talents,modalidade,build,damage)
    VALUES(?,?,?,?,?,?,?)`,[nome,raca,classe,talents,modalidade,build,damage])
    const id = result.insertId
    return IdUser(id)
}
//const notes = await AllUser()                                                                                                                                                              
//console.log(notes)