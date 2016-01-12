package com.sap.mi.innovation.controller;

import com.sap.mi.innovation.model.IdeaEntity;
import com.sap.mi.innovation.model.UsersEntity;
import com.sap.mi.innovation.repository.IdeaRepository;
import com.sap.mi.innovation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by I309891 on 1/12/2016.
 */
@RestController
@RequestMapping(value = "idea")
public class IdeaController {
    // 自动装配
    @Autowired
    private IdeaRepository ideaRepository;

    // 用户管理
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<IdeaEntity> getAllIdeas() {
        // 找到user表里的所有记录
        List<IdeaEntity> ideaList = ideaRepository.findAll();

        // 返回 pages 目录下的 userManage.jsp 页面
        return ideaList;
    }
}
