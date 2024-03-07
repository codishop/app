import { Button, Flex, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import ProductService from '../../../../services/http/product.service'
import SimpleTableComponent from '../../components/common/simple-table.component'

const ProductsPage = () => {
    const tableHeaders = ['Produto', 'Preço', 'Ref', 'Quant', 'Situação']
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        await ProductService.find().then(res => setProducts(res)).catch(err => console.log(err))
    }


    return (
        <Flex flex={1} flexDir='column'>
            <Flex w='100%' justifyContent='space-between' mb={4}>
                <Heading>Produtos</Heading>
                <Button>Novo produto</Button>
            </Flex>

            <SimpleTableComponent headers={tableHeaders}>
                {
                    products?.map((obj, index) => (
                        <Tr key={index}>
                            <Td display='flex' alignItems='center' flexDir='row'><Image src='/images/products/product1.png' alt='1' boxSize="40px" mr={2} />{obj.name}</Td>
                            <Td>R$ 350,00</Td>
                            <Td>{obj.reference}</Td>
                            <Td>{obj.quantity}</Td>
                            <Td>{obj.isActive && 'Ativo' || 'Inativo'}</Td>
                        </Tr>
                    ))
                }
            </SimpleTableComponent>
        </Flex >
    )
}

export default ProductsPage