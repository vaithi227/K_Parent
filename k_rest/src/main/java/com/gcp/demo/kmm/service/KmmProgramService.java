package com.gcp.demo.kmm.service;

import java.util.Collection;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.gcp.demo.kmm.model.Program;

public interface KmmProgramService {

	
	Program findProgramById(int id) throws DataAccessException;
	Collection<Program> findAllPrograms() throws DataAccessException;
	void saveProgram(Program program) throws DataAccessException;
	void deleteProgram(Program program) throws DataAccessException;
	Collection<Program> findProgramByProgramName(String programName) throws DataAccessException;
	Collection<Program> getProgramNames() throws DataAccessException;


}
