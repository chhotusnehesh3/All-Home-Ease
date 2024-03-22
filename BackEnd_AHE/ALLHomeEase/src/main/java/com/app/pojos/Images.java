package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


@Entity
@Table(name="img_tb")
public class Images extends BaseEntity {
	
	
	public Images()
	{
		
	}

	public Images(String originalFilename) {
		// TODO Auto-generated constructor stub
	}
	
	
	private String name;
	private String type;
	@Lob
	private byte[] impSize;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public byte[] getImpSize() {
		return impSize;
	}
	public void setImpSize(byte[] impSize) {
		this.impSize = impSize;
	}

	
}
