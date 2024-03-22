package com.app.pojos;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "orders_tb")
public class Orders extends BaseEntity {

	// private String CustName; take from customer table
	@ManyToOne
	@JoinColumn(name = "employee_id", updatable = false)
	
	private Employees emp;

	@ManyToOne//(cascade = CascadeType.ALL)
	@JoinColumn(name = "service_id", updatable = false)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private HomeService service;
	@ManyToOne
	@JoinColumn(name = "user_id", updatable = false)

	private User user;
	@Column(columnDefinition = "varchar(40) default 'pending'")
	private String status = "pending";// pending/completed
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false, updatable = false)
	private Date bookingtime;

	@PrePersist
	private void onCreate() {
		bookingtime = new Date();
	}

	public Employees getEmp() {
		return emp;
	}

	public void setEmp(Employees emp) {
		this.emp = emp;
	}

	public HomeService getService() {
		return service;
	}

	public void setService(HomeService service) {
		this.service = service;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getBookingtime() {
		return bookingtime;
	}

	public void setBookingtime(Date bookingtime) {
		this.bookingtime = bookingtime;
	}
	
	
	
}
