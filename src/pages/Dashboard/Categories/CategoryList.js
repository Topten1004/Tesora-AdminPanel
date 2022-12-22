import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { GetCategoriesInfo } from "../../../redux/actions/getInfo";

import { useStyles } from "./StyleDiv/CategoriesStyleDiv";
import { routeContext } from "../../../context";
import { TESORA_IMAGE_API } from "../../../static/constants";
import CategoryDelete from "./CategoryDelete";
import Loading from "../../../components/Common/Loading";

import { format } from 'date-fns';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {
	Box, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow,
} from '@mui/material';

const CategoryList = (props) => {

	const {
		mockHead,
		categoriesInfo,
		GetCategoriesInfo,
	} = props;

	const classes = useStyles();
	const navigate = useNavigate();
	const [route, setRoute] = useContext(routeContext);

	const [loading, setLoading] = useState(true);
	const [openDialog, setOpenDialog] = useState(false);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [categoryId, setCategoryId] = useState(0);

	const handleListView = (element) => {
		setRoute('View Category')
		navigate('/dashboard/categories/view', { state: { data: element } })
	}

	const handleListEdit = (element) => {
		setRoute('Edit Category')
		navigate(`/dashboard/categories/edit/${element.categoryId}`)
	}

	const handleCategoryDeleteOpen = (element) => {
		setCategoryId(element.categoryId)
		setOpenDialog(true)
	}

	const handleCategoryDeleteClose = () => {
		setOpenDialog(false)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(+e.target.value);
		setPage(0);
	}

	const formatDBDate = (date) => {
		const removeT_db_datetime = date.replace("T", " ")
		const removeTail_db_datetime = removeT_db_datetime.split(".")[0]

		return removeTail_db_datetime
	}

	useEffect(() => {
		async function getCategories() {
			await GetCategoriesInfo()
			setLoading(false)
		}

		getCategories();
	}, [])

	return (
		<Box className={classes.tableContent}>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							{
								mockHead?.map((element, index) => {
									return (
										<TableCell key={index} sx={{ minWidth: element.width }}>
											{element.name}
										</TableCell>
									)
								})
							}
						</TableRow>
					</TableHead>
					<TableBody>
						{
							categoriesInfo && categoriesInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((element, index) => {
									return (
										<TableRow key={index}>
											<TableCell>
												<Box component={'img'} src={`${TESORA_IMAGE_API}${element.categoryImage}`} className={classes.collectionImage} />
											</TableCell>
											<TableCell>
												{element.title}
											</TableCell>
											<TableCell>
												<Box className={classes.active}
													sx={{
														background: element.status === 'active' ? '#4dbd74' : '#c8ced3',
														color: element.status === 'inactive' ? '#23282c' : 'white'
													}}
												>
													{element.status}
												</Box>
											</TableCell>
											<TableCell>
												{formatDBDate(element.createDate)}
											</TableCell>
											<TableCell>
												<Box className={classes.action}>
													<IconButton onClick={() => handleListEdit(element)}>
														<EditIcon />
													</IconButton>
													<IconButton onClick={() => handleCategoryDeleteOpen(element)}>
														<DeleteIcon />
													</IconButton>
													<IconButton onClick={() => handleListView(element)}>
														<VisibilityIcon />
													</IconButton>
												</Box>
											</TableCell>
										</TableRow>
									)
								})
						}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
								count={categoriesInfo ? categoriesInfo.length : 0}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>

			<CategoryDelete
				open={openDialog}
				handleClose={handleCategoryDeleteClose}
				categoryId={categoryId}
			/>

			{
				loading &&
				<Loading />
			}
		</Box>
	)
}

const mapStateToProps = state => ({
	categoriesInfo: state.categories.categoriesInfo
})

const mapDispatchToProps = {
	GetCategoriesInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);