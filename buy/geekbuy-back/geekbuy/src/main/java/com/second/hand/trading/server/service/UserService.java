package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.UserModel;
import com.second.hand.trading.server.vo.PageVo;

import java.util.List;

public interface UserService {


    UserModel getUser(Long id);


    UserModel userLogin(String accountNumber, String userPassword);


    boolean userSignIn(UserModel userModel);


    boolean updateUserInfo(UserModel userModel);


    boolean updatePassword(String newPassword, String oldPassword,Long id);

    PageVo<UserModel> getUserByStatus(int status, int page , int nums);
}
