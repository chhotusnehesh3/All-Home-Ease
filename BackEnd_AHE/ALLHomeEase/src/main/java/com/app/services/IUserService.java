package com.app.services;

import java.util.List;

import com.app.pojos.Employees;
import com.app.pojos.Feedback;
import com.app.pojos.User;

public interface IUserService {
	
	User authenticateUser(String email, String pass);
	User addNewUser(User user);
	//Address processAddress(Address address, long id);
	User getUser(long custid);
	User updateUser(User user, long custid);
	Feedback addNewFeedback(Feedback feedback);
	User sendPassword(String userName);
	List<User> showAllusers();
}
