package com.app.pojos;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

@Entity
@Table(name="service_tb")
public class HomeService extends BaseEntity{
	@Column(length = 50,unique = true)
	private String serviceName;
	@Column(length = 150)
	private String shortDesc;
	@Column(length = 400)
	private String longDesc;
	private double serviceCharge;
	private double serviceTax;

	@OneToOne(fetch = FetchType.EAGER)//,cascade = CascadeType.ALL)
	@JoinTable(
			name="service_img",joinColumns = {@JoinColumn(name="service_id")
			},
			inverseJoinColumns = {@JoinColumn(name="img_id")
			})
	private Images serviceImage;

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public String getShortDesc() {
		return shortDesc;
	}

	public void setShortDesc(String shortDesc) {
		this.shortDesc = shortDesc;
	}

	public String getLongDesc() {
		return longDesc;
	}

	public void setLongDesc(String longDesc) {
		this.longDesc = longDesc;
	}

	public double getServiceCharge() {
		return serviceCharge;
	}

	public void setServiceCharge(double serviceCharge) {
		this.serviceCharge = serviceCharge;
	}

	public double getServiceTax() {
		return serviceTax;
	}

	public void setServiceTax(double serviceTax) {
		this.serviceTax = serviceTax;
	}

	public Images getServiceImage() {
		return serviceImage;
	}

	public void setServiceImage(Images serviceImage) {
		this.serviceImage = serviceImage;
	}
	
	
	
	
}
