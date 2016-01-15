package com.sap.mi.innovation.controller;

import com.sap.mi.innovation.model.IdeaEntity;
import com.sap.mi.innovation.repository.IdeaRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
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

    @RequestMapping(value = "/createIdea", method = RequestMethod.POST)
    public ResponseEntity<String> createIdea(@RequestParam(value = "file", required = false) MultipartFile file,
                                             @RequestParam(value = "uid", required = false) int uid,
                                             @RequestParam(value = "cid", required = false) int cid,
                                             @RequestParam(value = "title", required = false) String title,
                                             @RequestParam(value = "content", required = false) String content,
                                             @RequestParam(value = "status", required = false) int status,
                                             @RequestParam(value = "i_vote", required = false) int i_vote,
                                             @RequestParam(value = "p_vote", required = false) int p_vote)
    throws IOException{

        IdeaEntity idea = new IdeaEntity();
        idea.setUid(uid);
        idea.setCid(cid);
        idea.setTitle(title);
        idea.setContent(content);
        idea.setStatus(status);
        idea.setiVote(i_vote);
        idea.setpVote(p_vote);
        IdeaEntity savedIdea;
        try {
            savedIdea = ideaRepository.saveAndFlush(idea);
        }catch(Exception e){
            e.printStackTrace();
            Logger logger = Logger.getLogger(UserController.class);
            logger.error(e.getMessage());
            return new ResponseEntity<String>(HttpStatus.EXPECTATION_FAILED);
        }
        String ideaDirPath = "C:\\Users\\I309908\\IdeaProjects\\Innovation_Zoo\\src\\main\\resources\\image\\idea\\"+savedIdea.getId();
        File ideaDir = new File(ideaDirPath);
        if(!ideaDir.exists())
            ideaDir.mkdir();
        BufferedImage src = ImageIO.read(new ByteArrayInputStream(file.getBytes()));
        File destination = new File(ideaDir + "\\"+file.getOriginalFilename()+".png");
        if(!destination.exists())
        destination.createNewFile();

        ImageIO.write(src, "png", destination);
        return ResponseEntity.ok("get image");
    }

}
