package com.codestates.hobby.domain.category.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true)
	private String korName;

	@Column(nullable = false, unique = true)
	private String engName;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "group_id")
	private Category group;

	private Category(String korName, String engName, Category group) {
		this.korName = korName;
		this.engName = engName;
		this.group = group;
	}

	public static Category createParent(String korName, String engName) {
		return new Category(korName, engName, null);
	}

	public static Category createChild(String korName, String engName, Category parent) {
		return new Category(korName, engName, parent);
	}

	public boolean isGroup() {
		return group != null;
	}
}