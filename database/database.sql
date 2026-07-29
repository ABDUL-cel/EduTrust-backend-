
-- ======================================
-- EduTrust Database
-- ======================================

CREATE DATABASE IF NOT EXISTS edutrust;

USE edutrust;

-- ======================================
-- Schools
-- ======================================

CREATE TABLE schools (

    id INT AUTO_INCREMENT PRIMARY KEY,

    school_name VARCHAR(150) NOT NULL,

    owner_name VARCHAR(100) NOT NULL,

    phone VARCHAR(20) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    address TEXT,

    password VARCHAR(255) NOT NULL,

    school_code VARCHAR(20) UNIQUE NOT NULL,

    status ENUM('active','inactive') DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
