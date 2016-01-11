package com.sap.mi.innovation.controller;

import com.sap.mi.innovation.model.UsersEntity;
import com.sap.mi.innovation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by I309891 on 1/6/2016.
 */

@RestController
@RequestMapping(value = "User")
public class UserController {

    // 自动装配
    @Autowired
    private UserRepository userRepository;

    // 用户管理
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<UsersEntity> getAllUsers() {
        // 找到user表里的所有记录
        List<UsersEntity> userList = userRepository.findAll();

        // 返回 pages 目录下的 userManage.jsp 页面
        return userList;
    }
}
